// src/tenant/Profile.js
import React from 'react';
import { View, Text } from 'react-native';
import { Screen, Card, Chip, Button } from '../../components/Kit';
import { theme } from '../../design-system/theme';

export default function Profile() {
  const tenant = {
    name: 'Rohan Kumar',
    email: 'rohan@example.com',
    phone: '+91-98xxxxxx',
    aadhar: true,
    agreement: { uploaded: true, date: '01 Aug 2025' },
  };

  return (
    <Screen title="Profile" scroll>
      {/* Hero: Avatar + basic info */}
      <Card style={{ alignItems: 'center', paddingVertical: 24 }}>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: theme.colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 32, color: 'white', fontWeight: '800' }}>
            {tenant.name[0]}
          </Text>
        </View>
        <Text
          style={{ fontSize: 18, fontWeight: '700', color: theme.colors.ink }}
        >
          {tenant.name}
        </Text>
        <Text style={{ color: theme.colors.muted, marginTop: 4 }}>
          {tenant.email} • {tenant.phone}
        </Text>
        <View style={{ marginTop: 10 }}>
          {tenant.aadhar ? (
            <Chip text="Aadhar Uploaded" tone="success" />
          ) : (
            <Chip text="Aadhar Missing" tone="danger" />
          )}
        </View>
      </Card>

      {/* Agreement */}
      <Card style={{ padding: 18 }}>
        <Text style={{ fontWeight: '700', marginBottom: 6 }}>Agreement</Text>
        {tenant.agreement.uploaded ? (
          <Text style={{ color: theme.colors.muted }}>
            Uploaded • {tenant.agreement.date}
          </Text>
        ) : (
          <Text style={{ color: theme.colors.danger }}>Not uploaded</Text>
        )}
      </Card>

      {/* Actions */}
      <Card style={{ padding: 18 }}>
        <Text style={{ fontWeight: '700', marginBottom: 12 }}>Actions</Text>
        <Button title="Update Profile" onPress={() => {}} />
        <View style={{ height: 10 }} />
        <Button
          variant="secondary"
          title="Upload Documents"
          onPress={() => {}}
        />
      </Card>
    </Screen>
  );
}
