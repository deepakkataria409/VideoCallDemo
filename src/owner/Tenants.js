// src/owner/Tenants.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Screen, Card, Chip, Button } from '../../components/Kit';
import { theme } from '../../design-system/theme';

export default function Tenants({ navigation }) {
  const tenants = [
    { id: 1, name: 'Rohan', room: '101', status: 'Paid' },
    { id: 2, name: 'Priya', room: '102', status: 'Pending' },
    { id: 3, name: 'Aman', room: '103', status: 'Late' },
  ];

  const getChip = status => {
    switch (status) {
      case 'Paid':
        return <Chip text="✅ Paid" tone="success" />;
      case 'Pending':
        return <Chip text="❌ Pending" tone="danger" />;
      case 'Late':
        return <Chip text="⚠ Late" tone="warning" />;
      default:
        return <Chip text={status} />;
    }
  };

  return (
    <Screen
      title="Tenants"
      right={
        <Button
          title="Add Tenant"
          onPress={() => navigation.navigate('TenantsForm')}
        />
      }
      scroll
    >
      {/* Hero summary */}
      <View
        style={{
          backgroundColor: theme.colors.primary,
          borderRadius: 18,
          padding: 16,
          marginBottom: 16,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '800' }}>
          3 Active Tenants
        </Text>
        <Text style={{ color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>
          1 Paid · 1 Pending · 1 Late
        </Text>
      </View>

      {/* Tenant list */}
      {tenants.length === 0 ? (
        <Card style={{ alignItems: 'center', padding: 24 }}>
          <Text style={{ color: theme.colors.muted }}>
            No tenants added yet. Tap "Add Tenant" to get started.
          </Text>
        </Card>
      ) : (
        <View style={{ gap: 12 }}>
          {tenants.map(t => (
            <Pressable
              key={t.id}
              onPress={() => navigation.navigate('TenantProfile', { id: t.id })}
            >
              <Card
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 14,
                  paddingHorizontal: 18,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '700',
                      color: theme.colors.ink,
                    }}
                  >
                    {t.name}
                  </Text>
                  <Text style={{ color: theme.colors.muted, marginTop: 2 }}>
                    Room {t.room} • {t.status}
                  </Text>
                </View>
                {getChip(t.status)}
              </Card>
            </Pressable>
          ))}
        </View>
      )}
    </Screen>
  );
}
