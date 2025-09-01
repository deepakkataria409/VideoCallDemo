import React from 'react';
import { View, Text } from 'react-native';
import { Screen, Card, Button } from '../../components/Kit';
import { theme } from '../../design-system/theme';

export default function RoleSelect({ navigation }) {
  return (
    <Screen title="Welcome" scroll>
      {/* Hero header */}
      <View
        style={{
          backgroundColor: theme.colors.primary,
          borderRadius: 22,
          padding: 20,
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 46, marginBottom: 6 }}>🏠</Text>
        <Text style={{ color: 'white', fontSize: 22, fontWeight: '800' }}>
          Manage your PGs effortlessly
        </Text>
        <Text
          style={{
            color: 'rgba(255,255,255,0.8)',
            marginTop: 6,
            textAlign: 'center',
          }}
        >
          Choose your role to get started
        </Text>
      </View>

      {/* Selection card */}
      <Card style={{ padding: 24 }}>
        <Button
          title="👑 I am an Owner"
          onPress={() => navigation.navigate('Login', { role: 'owner' })}
        />
        <View style={{ height: 14 }} />
        <Button
          variant="secondary"
          title="🙋 I am a Tenant"
          onPress={() => navigation.navigate('Login', { role: 'tenant' })}
        />
      </Card>

      {/* Info footer */}
      <Text
        style={{
          textAlign: 'center',
          marginTop: 16,
          color: theme.colors.muted,
          fontSize: 13,
        }}
      >
        You can always switch roles later from settings.
      </Text>
    </Screen>
  );
}
