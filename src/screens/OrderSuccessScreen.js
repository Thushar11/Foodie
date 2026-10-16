import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme/theme';
import { MOCK_USER } from '../data/dummyData';

export default function OrderSuccessScreen({ route, navigation }) {
  const { orderId, cartItems = [], totalBill = 0 } = route.params;
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();

    const simulateAutomatedMessages = () => {
      const itemsList = cartItems.map(item => `${item.quantity}x ${item.name}`).join(', ');
      const message = `Your Foodie order #${orderId} is confirmed!\nYou ordered: ${itemsList}.\nTotal bill: ₹${totalBill.toFixed(2)}.`;
      
      // We use an Alert here to simulate what the user's phone would receive 
      // from your backend messaging service (like Twilio or AWS SNS).
      Alert.alert(
        "📱 Automated Message Sent",
        `The following message was automatically sent to ${MOCK_USER.phone} and ${MOCK_USER.email} via the Foodie servers:\n\n"${message}"`,
        [{ text: "Got it!" }]
      );
    };
    
    // Add a slight delay before showing the simulated SMS
    setTimeout(simulateAutomatedMessages, 1200);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Animated.View style={[styles.iconContainer, { transform: [{ scale: scaleValue }] }]}>
          <Ionicons name="checkmark-circle" size={120} color={theme.colors.success} />
        </Animated.View>
        
        <Text style={styles.title}>Order Placed Successfully!</Text>
        <Text style={styles.message}>Your delicious food is being prepared.</Text>
        
        <View style={styles.orderIdContainer}>
          <Text style={styles.orderIdLabel}>Order ID:</Text>
          <Text style={styles.orderId}>#{orderId}</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.homeButton}
        onPress={() => navigation.navigate('MainTabs')}
      >
        <Text style={styles.homeButtonText}>Return to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'space-between',
    padding: theme.spacing.lg,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: theme.spacing.xl,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: theme.colors.textLight,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  orderIdContainer: {
    backgroundColor: theme.colors.card,
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    ...theme.shadows.light,
  },
  orderIdLabel: {
    fontSize: 16,
    color: theme.colors.textLight,
    marginRight: theme.spacing.sm,
  },
  orderId: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  homeButton: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.round,
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  homeButtonText: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
