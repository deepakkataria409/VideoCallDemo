// components/Kit.js
import React from 'react';
import { View, Text, Pressable, ScrollView, StatusBar } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { theme } from '../design-system/theme';

/**
 * Screen
 * - Safe area handled globally
 * - Optional scroll via `scroll` prop
 * - Common page header (title + right action)
 */
export const Screen = ({ title, right, children, scroll = false }) => {
  const insets = useSafeAreaInsets();
  const Container = scroll ? ScrollView : View;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.bg }}
      edges={['top', 'left', 'right', 'bottom']}
    >
      {/* Native RN StatusBar */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.bg}
        translucent={false}
      />

      {/* Header */}
      <View
        style={{
          paddingTop: 10,
          paddingHorizontal: theme.spacing.xl,
          paddingBottom: theme.spacing.md,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={{ fontSize: 28, fontWeight: '800', color: theme.colors.ink }}
        >
          {title}
        </Text>
        {right}
      </View>

      {/* Body */}
      <Container
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingHorizontal: theme.spacing.xl,
          paddingBottom: insets.bottom + theme.spacing.xl,
          gap: theme.spacing.md,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </Container>
    </SafeAreaView>
  );
};

/**
 * Card
 */
export const Card = ({ children, style }) => (
  <View
    style={[
      {
        backgroundColor: theme.colors.card,
        borderRadius: theme.radius,
        padding: theme.spacing.lg,
      },
      // soft shadow
      {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 4,
      },
      style,
    ]}
  >
    {children}
  </View>
);

/**
 * Button (primary / secondary)
 */
export const Button = ({ title, onPress, variant = 'primary' }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      {
        backgroundColor:
          variant === 'primary' ? theme.colors.primary : '#E5E7EB',
        paddingVertical: 14,
        paddingHorizontal: 10,
        borderRadius: theme.radius,
        alignItems: 'center',
        opacity: pressed ? 0.85 : 1,
      },
    ]}
  >
    <Text
      style={{
        color: variant === 'primary' ? 'white' : theme.colors.ink,
        fontWeight: '700',
      }}
    >
      {title}
    </Text>
  </Pressable>
);

/**
 * StatTile
 */
export const StatTile = ({ label, value, icon, tone }) => (
  <Card style={{ flex: 1 }}>
    <Text style={{ fontSize: 13, color: theme.colors.muted }}>{label}</Text>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 8,
        marginTop: 6,
      }}
    >
      <Text
        style={{
          fontSize: 26,
          fontWeight: '700',
          color: tone || theme.colors.ink,
        }}
      >
        {value}
      </Text>
      {icon ? <Text>{icon}</Text> : null}
    </View>
  </Card>
);

/**
 * Chip
 */
export const Chip = ({ text, tone = 'muted' }) => (
  <View
    style={{
      backgroundColor: '#F1F5F9',
      paddingVertical: 6,
      paddingHorizontal: 10,
      borderRadius: 999,
    }}
  >
    <Text
      style={{ color: theme.colors[tone] || theme.colors.muted, fontSize: 12 }}
    >
      {text}
    </Text>
  </View>
);

/**
 * Row (title + optional subtitle + right element)
 */
export const Row = ({ left, right, subtitle }) => (
  <Card>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View>
        <Text
          style={{ fontSize: 16, fontWeight: '700', color: theme.colors.ink }}
        >
          {left}
        </Text>
        {subtitle ? (
          <Text style={{ marginTop: 4, color: theme.colors.muted }}>
            {subtitle}
          </Text>
        ) : null}
      </View>
      {right}
    </View>
  </Card>
);
