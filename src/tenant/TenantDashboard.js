// src/tenant/TenantDashboard.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Screen, Card, Button, Chip } from '../../components/Kit';
import { theme } from '../../design-system/theme';

const MiniStat = ({ label, value }) => (
  <Card style={{ flex: 1, padding: 14 }}>
    <Text style={{ color: theme.colors.muted, fontSize: 12 }}>{label}</Text>
    <Text style={{ fontSize: 18, fontWeight: '800', marginTop: 6 }}>
      {value}
    </Text>
  </Card>
);

const RowCard = ({ title, subtitle, right }) => (
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
        style={{ fontSize: 16, fontWeight: '700', color: theme.colors.ink }}
      >
        {title}
      </Text>
      {subtitle ? (
        <Text style={{ color: theme.colors.muted, marginTop: 2 }}>
          {subtitle}
        </Text>
      ) : null}
    </View>
    {right}
  </Card>
);

export default function TenantDashboard({ navigation }) {
  // demo data
  const dueAmount = '₹8,000';
  const dueDate = '10 Aug';

  return (
    <Screen title="Overview" scroll>
      {/* HERO: Rent due + quick actions */}
      <View
        style={{
          backgroundColor: theme.colors.primary,
          borderRadius: 22,
          padding: 20,
        }}
      >
        <Text style={{ color: 'white', opacity: 0.9 }}>This month</Text>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: '800',
            marginTop: 4,
          }}
        >
          Rent due {dueAmount}
        </Text>
        <Text style={{ color: 'rgba(255,255,255,0.85)', marginTop: 2 }}>
          Due on {dueDate}
        </Text>

        {/* Quick actions */}
        <View style={{ flexDirection: 'row', gap: 10, marginTop: 14 }}>
          <Pressable
            onPress={() => navigation.navigate('Pay')}
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              paddingVertical: 10,
              paddingHorizontal: 14,
              flex: 1,
              alignItems: 'center',
            }}
          >
            <Text style={{ fontWeight: '700', color: theme.colors.ink }}>
              💳 Pay Now
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Complaints')}
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              paddingVertical: 10,
              paddingHorizontal: 14,
              flex: 1,
              alignItems: 'center',
            }}
          >
            <Text style={{ fontWeight: '700', color: theme.colors.ink }}>
              🛠️ Raise Complaint
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Mini stats */}
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <MiniStat label="Last payment" value="₹8,000 · 05 Aug" />
        <MiniStat label="Complaints open" value="1" />
      </View>

      {/* Rent card (secondary emphasis) */}
      <Card>
        <Text style={{ fontSize: 16, fontWeight: '700' }}>Rent Details</Text>
        <Text style={{ marginTop: 6, color: theme.colors.muted }}>
          {dueAmount} due on {dueDate}
        </Text>
        <View style={{ height: 10 }} />
        <Button title="Pay Now" onPress={() => navigation.navigate('Pay')} />
      </Card>

      {/* Room status */}
      <RowCard
        title="Room 101 • 2/3 beds"
        subtitle="Sunrise PG, HSR"
        right={<Chip text="Good" tone="success" />}
      />

      {/* Complaints summary */}
      <RowCard
        title="Active Complaints"
        subtitle="1 open"
        right={<Chip text="Pending" tone="warning" />}
      />

      {/* Notices */}
      <RowCard
        title="Notices"
        subtitle="2 new"
        right={
          <Text style={{ color: theme.colors.muted, fontSize: 18 }}>›</Text>
        }
      />
    </Screen>
  );
}
