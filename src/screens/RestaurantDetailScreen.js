import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme/theme';
import { CartContext } from '../context/CartContext';

export default function RestaurantDetailScreen({ route, navigation }) {
  const { restaurant } = route.params;
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item, restaurant.id);
  };

  const renderMenuItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.menuImage} />
      <View style={styles.menuInfo}>
        <View style={styles.menuHeader}>
          <Text style={styles.menuName}>{item.name}</Text>
          {item.isVegetarian ? (
            <View style={[styles.vegIcon, { borderColor: 'green' }]}>
              <View style={[styles.vegDot, { backgroundColor: 'green' }]} />
            </View>
          ) : (
            <View style={[styles.vegIcon, { borderColor: 'red' }]}>
              <View style={[styles.vegDot, { backgroundColor: 'red' }]} />
            </View>
          )}
        </View>
        <Text style={styles.menuDescription} numberOfLines={2}>{item.description}</Text>
        <View style={styles.menuFooter}>
          <Text style={styles.menuPrice}>₹{item.price}</Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => handleAddToCart(item)}
            activeOpacity={0.7}
          >
            <Ionicons name="add" size={20} color={theme.colors.white} />
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: restaurant.imageUrl }} style={styles.headerImage} />
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.detailsContainer}>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <Text style={styles.restaurantCuisine}>{restaurant.cuisine}</Text>
        
        <View style={styles.metaContainer}>
          <View style={styles.metaBadge}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.metaText}>{restaurant.rating} Rating</Text>
          </View>
          <View style={styles.metaBadge}>
            <Ionicons name="time-outline" size={16} color={theme.colors.text} />
            <Text style={styles.metaText}>{restaurant.deliveryTime}</Text>
          </View>
          <View style={styles.metaBadge}>
            <Ionicons name="bicycle-outline" size={16} color={theme.colors.text} />
            <Text style={styles.metaText}>₹{restaurant.deliveryFee}</Text>
          </View>
        </View>
      </View>

      <View style={styles.menuContainer}>
        <Text style={styles.menuTitle}>Menu</Text>
        <FlatList
          data={restaurant.menu}
          renderItem={renderMenuItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.menuList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  imageContainer: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: theme.spacing.md,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.round,
    padding: theme.spacing.xs,
    ...theme.shadows.light,
  },
  detailsContainer: {
    backgroundColor: theme.colors.card,
    marginTop: -30,
    borderTopLeftRadius: theme.borderRadius.xl,
    borderTopRightRadius: theme.borderRadius.xl,
    padding: theme.spacing.lg,
    ...theme.shadows.medium,
  },
  restaurantName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
  },
  restaurantCuisine: {
    fontSize: 16,
    color: theme.colors.textLight,
    marginBottom: theme.spacing.md,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.md,
  },
  metaText: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.text,
    marginLeft: 6,
  },
  menuContainer: {
    flex: 1,
    paddingTop: theme.spacing.lg,
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  menuList: {
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
  },
  menuItem: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.md,
    padding: theme.spacing.sm,
    ...theme.shadows.light,
  },
  menuImage: {
    width: 90,
    height: 90,
    borderRadius: theme.borderRadius.md,
  },
  menuInfo: {
    flex: 1,
    marginLeft: theme.spacing.md,
    justifyContent: 'space-between',
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuName: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
    flex: 1,
  },
  vegIcon: {
    width: 14,
    height: 14,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  vegDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  menuDescription: {
    fontSize: 12,
    color: theme.colors.textLight,
    marginTop: 4,
  },
  menuFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  menuPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.round,
  },
  addButtonText: {
    color: theme.colors.white,
    fontWeight: 'bold',
    marginLeft: 4,
  },
});
