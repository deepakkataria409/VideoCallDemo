// src/owner/OwnerDashboard.js
import React, { useState } from 'react';
import { Screen, Card, Button, Row, Chip } from '../../components/Kit';
import { View, Text, Pressable } from 'react-native';
import { theme } from '../../design-system/theme';

const SegButton = ({ label, active, onPress }) => (
  <Pressable
    onPress={onPress}
    style={{
      backgroundColor: active ? 'white' : 'rgba(255,255,255,0.2)',
      paddingVertical: 8,
      paddingHorizontal: 14,
      borderRadius: 999,
      borderWidth: active ? 1 : 0,
      borderColor: active ? 'rgba(0,0,0,0.08)' : 'transparent',
    }}
  >
    <Text
      style={{ color: active ? theme.colors.ink : 'white', fontWeight: '700' }}
    >
      {label}
    </Text>
  </Pressable>
);

const StatCard = ({ icon, title, value, tone }) => (
  <Card style={{ flex: 1, padding: 16 }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
      <View
        style={{
          backgroundColor: '#EEF2FF',
          width: 40,
          height: 40,
          borderRadius: 999,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 18 }}>{icon}</Text>
      </View>
      <Text style={{ color: theme.colors.muted }}>{title}</Text>
    </View>
    <Text
      style={{
        marginTop: 8,
        fontSize: 26,
        fontWeight: '800',
        color: tone || theme.colors.ink,
      }}
    >
      {value}
    </Text>
  </Card>
);

export default function OwnerDashboard({ navigation }) {
  const [range, setRange] = useState('month'); // 'month' | 'week'

  return (
    <Screen
      title="Dashboard"
      right={
        <Button
          variant="secondary"
          title="Add PG"
          onPress={() => navigation.navigate('PGs')}
        />
      }
      scroll
    >
      {/* Hero banner */}
      <View
        style={{
          backgroundColor: theme.colors.primary,
          borderRadius: 22,
          padding: 18,
          overflow: 'hidden',
        }}
      >
        <Text style={{ color: 'white', opacity: 0.85 }}>Welcome back 👋</Text>
        <Text
          style={{
            color: 'white',
            fontSize: 22,
            fontWeight: '800',
            marginTop: 4,
          }}
        >
          Your PG overview
        </Text>

        {/* Segmented range */}
        <View
          style={{
            marginTop: 14,
            backgroundColor: 'rgba(255,255,255,0.14)',
            borderRadius: 999,
            padding: 4,
            flexDirection: 'row',
            gap: 6,
            alignSelf: 'flex-start',
          }}
        >
          <SegButton
            label="This Month"
            active={range === 'month'}
            onPress={() => setRange('month')}
          />
          <SegButton
            label="This Week"
            active={range === 'week'}
            onPress={() => setRange('week')}
          />
        </View>

        {/* Quick links */}
        <View style={{ flexDirection: 'row', gap: 10, marginTop: 14 }}>
          <Pressable
            onPress={() => navigation.navigate('Tenants')}
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              paddingVertical: 10,
              paddingHorizontal: 14,
            }}
          >
            <Text style={{ fontWeight: '700', color: theme.colors.ink }}>
              + Add Tenant
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Announcements')}
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              paddingVertical: 10,
              paddingHorizontal: 14,
            }}
          >
            <Text style={{ fontWeight: '700', color: theme.colors.ink }}>
              + Notice
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Stat grid */}
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <StatCard icon="🏠" title="Total PGs" value="8" />
        <StatCard icon="🛏️" title="Occ. / Vac." value="132 / 28" />
      </View>
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <StatCard
          icon="💰"
          title={range === 'month' ? 'Collected (MoM)' : 'Collected (WoW)'}
          value="₹2.4L"
          tone={theme.colors.success}
        />
        <StatCard
          icon="📋"
          title="Active Complaints"
          value="5"
          tone={theme.colors.danger}
        />
      </View>

      {/* Upcoming dues */}
      <Row
        left="Upcoming dues"
        subtitle="12 tenants due this week"
        right={<Chip text="View" />}
      />

      {/* Activity feed */}
      <Card>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 8,
          }}
        >
          <Text style={{ fontWeight: '700' }}>Recent activity</Text>
          <Pressable onPress={() => navigation.navigate('Rent')}>
            <Text style={{ color: theme.colors.primary, fontWeight: '700' }}>
              See all
            </Text>
          </Pressable>
        </View>

        <View style={{ gap: 12 }}>
          <FeedItem
            dotColor={theme.colors.success}
            text="Rohan paid ₹8,000"
            meta="5 Aug · Room 101"
          />
          <FeedItem
            dotColor={theme.colors.danger}
            text="Priya raised complaint"
            meta="WiFi not working"
          />
          <FeedItem
            dotColor={theme.colors.muted}
            text="Room 102 marked Vacant"
            meta="Sunrise PG · 2-bed"
          />
        </View>
      </Card>
    </Screen>
  );
}

const FeedItem = ({ dotColor, text, meta }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
    <View
      style={{
        width: 8,
        height: 8,
        borderRadius: 999,
        backgroundColor: dotColor,
      }}
    />
    <View style={{ flex: 1 }}>
      <Text style={{ fontWeight: '700', color: theme.colors.ink }}>{text}</Text>
      <Text style={{ color: theme.colors.muted, marginTop: 2 }}>{meta}</Text>
    </View>
  </View>
);
