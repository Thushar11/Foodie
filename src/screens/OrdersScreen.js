import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme/theme';
import { CartContext } from '../context/CartContext';

export default function OrdersScreen() {
  const { orders } = useContext(CartContext);

  const renderOrderItem = ({ item }) => {
    const date = new Date(item.date).toLocaleDateString('en-IN', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });

    return (
      <View style={styles.orderCard}>
        <View style={styles.orderHeader}>
          <View>
            <Text style={styles.orderId}>Order #{item.id}</Text>
            <Text style={styles.orderDate}>{date}</Text>
          </View>
          <Text style={styles.orderTotal}>₹{item.totalAmount.toFixed(2)}</Text>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.itemsList}>
          {item.items.map((cartItem, index) => (
            <View key={index} style={styles.itemRow}>
              <Text style={styles.itemQuantity}>{cartItem.quantity}x</Text>
              <Text style={styles.itemName} numberOfLines={1}>{cartItem.name}</Text>
              <Text style={styles.itemPrice}>₹{(cartItem.price * cartItem.quantity).toFixed(2)}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.statusContainer}>
          <Ionicons name="checkmark-circle" size={16} color={theme.colors.success} />
          <Text style={styles.statusText}>Delivered</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Order History</Text>
      </View>

      {orders.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="receipt-outline" size={80} color={theme.colors.border} />
          <Text style={styles.emptyText}>No past orders found.</Text>
        </View>
      ) : (
        <FlatList
          data={orders}
          renderItem={renderOrderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.card,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.xl,
  },
  emptyText: {
    fontSize: 18,
    color: theme.colors.textLight,
    marginTop: theme.spacing.md,
  },
  listContainer: {
    padding: theme.spacing.md,
  },
  orderCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    ...theme.shadows.light,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  orderDate: {
    fontSize: 12,
    color: theme.colors.textLight,
    marginTop: 2,
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.sm,
  },
  itemsList: {
    marginBottom: theme.spacing.sm,
  },
  itemRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  itemQuantity: {
    width: 30,
    fontSize: 14,
    color: theme.colors.textLight,
    fontWeight: '600',
  },
  itemName: {
    flex: 1,
    fontSize: 14,
    color: theme.colors.text,
  },
  itemPrice: {
    fontSize: 14,
    color: theme.colors.text,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.sm,
    backgroundColor: '#E8F5E9',
    alignSelf: 'flex-start',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
    borderRadius: theme.borderRadius.sm,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.success,
    marginLeft: 4,
  },
});
