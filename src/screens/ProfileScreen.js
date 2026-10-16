import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme/theme';
import { MOCK_USER } from '../data/dummyData';

export default function ProfileScreen({ navigation }) {
  const MenuItem = ({ icon, title, color = theme.colors.text, isLogout = false, onPress }) => (
    <TouchableOpacity 
      style={styles.menuItem}
      onPress={onPress ? onPress : () => Alert.alert('Coming Soon', `${title} feature is under development.`)}
    >
      <View style={[styles.menuIcon, { backgroundColor: isLogout ? '#FFEbee' : theme.colors.background }]}>
        <Ionicons name={icon} size={22} color={isLogout ? theme.colors.error : theme.colors.primary} />
      </View>
      <Text style={[styles.menuTitle, { color }]}>{title}</Text>
      {!isLogout && <Ionicons name="chevron-forward" size={20} color={theme.colors.textLight} />}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Ionicons name="person-circle" size={100} color={theme.colors.primary} style={{ marginBottom: 8 }} />
          <Text style={styles.name}>{MOCK_USER.name}</Text>
          <Text style={styles.email}>{MOCK_USER.email}</Text>
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Ionicons name="call-outline" size={20} color={theme.colors.textLight} />
            <Text style={styles.infoText}>{MOCK_USER.phone}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={20} color={theme.colors.textLight} />
            <Text style={styles.infoText}>{MOCK_USER.address}</Text>
          </View>
        </View>

        <View style={styles.menuSection}>
          <MenuItem 
            icon="person-outline" 
            title="Edit Profile" 
            onPress={() => navigation.navigate('EditProfile')}
          />
          <MenuItem icon="card-outline" title="Payment Methods" />
          <MenuItem icon="heart-outline" title="Saved Places" />
          <MenuItem icon="notifications-outline" title="Notifications" />
          <MenuItem icon="help-circle-outline" title="Help Center" />
          <View style={styles.menuDivider} />
          <MenuItem icon="log-out-outline" title="Log Out" color={theme.colors.error} isLogout={true} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
    backgroundColor: theme.colors.card,
    borderBottomLeftRadius: theme.borderRadius.xl,
    borderBottomRightRadius: theme.borderRadius.xl,
    ...theme.shadows.light,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: theme.borderRadius.round,
    marginBottom: theme.spacing.md,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: theme.colors.textLight,
  },
  infoSection: {
    backgroundColor: theme.colors.card,
    margin: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    ...theme.shadows.light,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
  },
  infoText: {
    fontSize: 16,
    color: theme.colors.text,
    marginLeft: theme.spacing.md,
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.xs,
  },
  menuSection: {
    backgroundColor: theme.colors.card,
    marginHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.sm,
    ...theme.shadows.light,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: theme.borderRadius.round,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: theme.spacing.md,
  },
  menuDivider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.sm,
    marginHorizontal: theme.spacing.md,
  },
});
