// src/owner/Complaints.js
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Screen, Card, Chip } from '../../components/Kit';
import { theme } from '../../design-system/theme';

const FilterPill = ({ label, active, onPress }) => (
  <Pressable
    onPress={onPress}
    style={{
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 999,
      backgroundColor: active ? theme.colors.ink : '#E5E7EB',
    }}
  >
    <Text
      style={{ color: active ? 'white' : theme.colors.ink, fontWeight: '700' }}
    >
      {label}
    </Text>
  </Pressable>
);

const ComplaintRow = ({ title, subtitle, status }) => {
  const getChip = () => {
    switch (status) {
      case 'Pending':
        return <Chip text="Pending" tone="warning" />;
      case 'In Progress':
        return <Chip text="In Progress" tone="muted" />;
      case 'Resolved':
        return <Chip text="Resolved" tone="success" />;
      default:
        return <Chip text={status} />;
    }
  };

  return (
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
        <Text style={{ color: theme.colors.muted, marginTop: 2 }}>
          {subtitle}
        </Text>
      </View>
      {getChip()}
    </Card>
  );
};

export default function Complaints() {
  const [tab, setTab] = useState('All');

  const complaints = [
    {
      id: 1,
      title: 'WiFi not working',
      subtitle: 'Priya • Pending',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Water leakage',
      subtitle: 'Aman • Resolved',
      status: 'Resolved',
    },
    {
      id: 3,
      title: 'AC not cooling',
      subtitle: 'Rohan • In Progress',
      status: 'In Progress',
    },
  ];

  const filtered = complaints.filter(c =>
    tab === 'All' ? true : c.status === tab,
  );

  return (
    <Screen title="Complaints & Requests" scroll>
      {/* Hero */}
      <View
        style={{
          backgroundColor: theme.colors.primary,
          borderRadius: 20,
          padding: 18,
          marginBottom: 16,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '800' }}>
          Stay on top of issues
        </Text>
        <Text style={{ color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>
          Track complaints raised by tenants and mark them resolved
        </Text>
      </View>

      {/* Filter */}
      <Card style={{ padding: 14 }}>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {['All', 'Pending', 'In Progress', 'Resolved'].map(f => (
            <FilterPill
              key={f}
              label={f}
              active={tab === f}
              onPress={() => setTab(f)}
            />
          ))}
        </View>
      </Card>

      {/* List */}
      {filtered.length === 0 ? (
        <Card style={{ alignItems: 'center', padding: 24 }}>
          <Text style={{ color: theme.colors.muted }}>
            No complaints in this category.
          </Text>
        </Card>
      ) : (
        <View style={{ gap: 12 }}>
          {filtered.map(c => (
            <ComplaintRow
              key={c.id}
              title={c.title}
              subtitle={c.subtitle}
              status={c.status}
            />
          ))}
        </View>
      )}
    </Screen>
  );
}
