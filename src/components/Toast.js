import React, { useState, useRef, useEffect } from 'react';
import { Text, StyleSheet, Animated, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme/theme';

const useNativeDriver = Platform.OS !== 'web';

// Returns [toastElement, showToast]. Render toastElement last inside the screen's root view.
export function useToast(duration = 1500) {
  const [message, setMessage] = useState('');
  const opacity = useRef(new Animated.Value(0)).current;
  const hideTimer = useRef(null);

  useEffect(() => () => clearTimeout(hideTimer.current), []);

  const showToast = (text) => {
    setMessage(text);
    clearTimeout(hideTimer.current);
    Animated.timing(opacity, { toValue: 1, duration: 200, useNativeDriver }).start();
    hideTimer.current = setTimeout(() => {
      Animated.timing(opacity, { toValue: 0, duration: 200, useNativeDriver }).start();
    }, duration);
  };

  const translateY = opacity.interpolate({ inputRange: [0, 1], outputRange: [20, 0] });

  const toast = (
    <Animated.View pointerEvents="none" style={[styles.toast, { opacity, transform: [{ translateY }] }]}>
      <Ionicons name="checkmark-circle" size={20} color={theme.colors.success} />
      <Text style={styles.toastText} numberOfLines={1}>{message}</Text>
    </Animated.View>
  );

  return [toast, showToast];
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    left: theme.spacing.md,
    right: theme.spacing.md,
    bottom: theme.spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222222',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 12,
    borderRadius: theme.borderRadius.md,
    ...theme.shadows.medium,
  },
  toastText: {
    flex: 1,
    color: theme.colors.white,
    fontSize: 15,
    fontWeight: '600',
    marginLeft: theme.spacing.sm,
  },
});
