// src/owner/RentCenter.js
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Screen, Card, Button, Chip, StatTile } from '../../components/Kit';
import { theme } from '../../design-system/theme';

const SegChip = ({ label, active, onPress }) => (
  <Pressable
    onPress={onPress}
    style={{
      paddingVertical: 8,
      paddingHorizontal: 14,
      borderRadius: 999,
      backgroundColor: active ? 'white' : 'rgba(255,255,255,0.18)',
      borderWidth: active ? 1 : 0,
      borderColor: active ? 'rgba(0,0,0,0.08)' : 'transparent',
    }}
  >
    <Text
      style={{ fontWeight: '700', color: active ? theme.colors.ink : 'white' }}
    >
      {label}
    </Text>
  </Pressable>
);

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

const RowItem = ({ name, meta, right }) => (
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
        {name}
      </Text>
      <Text style={{ color: theme.colors.muted, marginTop: 2 }}>{meta}</Text>
    </View>
    {right}
  </Card>
);

export default function RentCenter() {
  const [range, setRange] = useState('Aug 2025'); // example
  const [tab, setTab] = useState('All'); // All | Paid | Pending | Late
  const [query, setQuery] = useState('');

  // demo data
  const items = [
    {
      id: 1,
      name: 'Rohan',
      status: 'Paid',
      amount: 8000,
      meta: '₹8,000 • Paid on 5 Aug',
    },
    {
      id: 2,
      name: 'Priya',
      status: 'Pending',
      amount: 10000,
      meta: '₹10,000 • Due 10 Aug',
    },
    {
      id: 3,
      name: 'Aman',
      status: 'Late',
      amount: 9000,
      meta: '₹9,000 • 3 days late',
    },
  ];

  const filtered = items.filter(i => {
    const byTab =
      tab === 'All' ? true : i.status.toLowerCase() === tab.toLowerCase();
    const byQuery = i.name.toLowerCase().includes(query.trim().toLowerCase());
    return byTab && byQuery;
  });

  return (
    <Screen title="Rent Center" scroll>
      {/* Hero summary with month selector */}
      <View
        style={{
          backgroundColor: theme.colors.primary,
          borderRadius: 20,
          padding: 18,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '800' }}>
          Monthly Summary
        </Text>
        <Text style={{ color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>
          Track collections, dues & late payments
        </Text>

        {/* Month/Range segmented control */}
        <View
          style={{
            marginTop: 14,
            backgroundColor: 'rgba(255,255,255,0.18)',
            borderRadius: 999,
            padding: 4,
            flexDirection: 'row',
            gap: 6,
            alignSelf: 'flex-start',
          }}
        >
          {['Aug 2025', 'Jul 2025', 'Jun 2025'].map(lbl => (
            <SegChip
              key={lbl}
              label={lbl}
              active={range === lbl}
              onPress={() => setRange(lbl)}
            />
          ))}
        </View>
      </View>

      {/* Stat tiles */}
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <StatTile
          label="Paid"
          value="₹2.4L"
          icon="✅"
          tone={theme.colors.success}
        />
        <StatTile label="Pending" value="₹80k" icon="⌛" tone="#F59E0B" />
      </View>

      {/* Filters + Search */}
      <Card style={{ padding: 14 }}>
        <View style={{ flexDirection: 'row', gap: 8, marginBottom: 10 }}>
          {['All', 'Paid', 'Pending', 'Late'].map(f => (
            <FilterPill
              key={f}
              label={f}
              active={tab === f}
              onPress={() => setTab(f)}
            />
          ))}
        </View>
        <View
          style={{
            backgroundColor: '#F1F5F9',
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 10,
          }}
        >
          <TextInput
            placeholder="Search tenant by name..."
            placeholderTextColor="#9CA3AF"
            value={query}
            onChangeText={setQuery}
          />
        </View>
      </Card>

      {/* List */}
      {filtered.length === 0 ? (
        <Card style={{ alignItems: 'center', padding: 24 }}>
          <Text style={{ color: theme.colors.muted }}>No records found.</Text>
        </Card>
      ) : (
        <View style={{ gap: 12 }}>
          {filtered.map(i => (
            <RowItem
              key={i.id}
              name={i.name}
              meta={i.meta}
              right={
                i.status === 'Paid' ? (
                  <Chip text="Paid" tone="success" />
                ) : i.status === 'Pending' ? (
                  <Button
                    variant="secondary"
                    title="Send Reminder"
                    onPress={() => {}}
                  />
                ) : (
                  <Chip text="Late" tone="warning" />
                )
              }
            />
          ))}
        </View>
      )}

      {/* Bulk actions */}
      <Card>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={{ flex: 1 }}>
            <Button title="Generate Receipts" onPress={() => {}} />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              variant="secondary"
              title="Download CSV"
              onPress={() => {}}
            />
          </View>
        </View>
      </Card>
    </Screen>
  );
}
