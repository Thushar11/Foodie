import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme/theme';
import { RESTAURANTS } from '../data/dummyData';
import { CartContext } from '../context/CartContext';
import { useToast } from '../components/Toast';

export default function CategoryScreen({ route, navigation }) {
  const { category } = route.params;
  const { addToCart } = useContext(CartContext);
  const [toast, showToast] = useToast();

  const handleAddToCart = (item) => {
    addToCart(item, item.restaurantId);
    showToast(`${item.name} added to cart`);
  };

  // Find all foods across all restaurants that match the selected category
  const categoryItems = [];
  RESTAURANTS.forEach(restaurant => {
    restaurant.menu.forEach(item => {
      // Check if the item's category matches, or if the restaurant's cuisine matches
      if (item.category.toLowerCase().includes(category.name.toLowerCase()) || 
          restaurant.cuisine.toLowerCase().includes(category.name.toLowerCase())) {
        categoryItems.push({
          ...item,
          restaurantName: restaurant.name,
          restaurantId: restaurant.id
        });
      }
    });
  });

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
        <View style={styles.restaurantRow}>
          <Ionicons name="restaurant-outline" size={14} color={theme.colors.textLight} />
          <Text style={styles.restaurantName} numberOfLines={1}>{item.restaurantName}</Text>
        </View>
        <Text style={styles.price}>₹{item.price}</Text>
      </View>
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => handleAddToCart(item)}
      >
        <Ionicons name="add" size={24} color={theme.colors.white} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{category.name} Food</Text>
        <View style={{ width: 24 }} />
      </View>

      {categoryItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="fast-food-outline" size={64} color={theme.colors.border} />
          <Text style={styles.emptyText}>No items found in this category.</Text>
        </View>
      ) : (
        <FlatList
          data={categoryItems}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
      {toast}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.card,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  backButton: {
    padding: theme.spacing.xs,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  list: {
    padding: theme.spacing.md,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    alignItems: 'center',
    ...theme.shadows.medium,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: theme.borderRadius.md,
  },
  info: {
    flex: 1,
    marginLeft: theme.spacing.md,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
  },
  restaurantRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  restaurantName: {
    fontSize: 14,
    color: theme.colors.textLight,
    marginLeft: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  addButton: {
    backgroundColor: theme.colors.primary,
    width: 40,
    height: 40,
    borderRadius: theme.borderRadius.round,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing.sm,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.xl,
  },
  emptyText: {
    fontSize: 16,
    color: theme.colors.textLight,
    marginTop: theme.spacing.md,
  },
});
