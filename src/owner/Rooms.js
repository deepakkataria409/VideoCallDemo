// src/owner/Rooms.js
import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Screen, Card, Button, Chip } from '../../components/Kit';
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
      style={{
        color: active ? 'white' : 'theme.colors.ink',
        fontWeight: '700',
      }}
    >
      {label}
    </Text>
  </Pressable>
);

const RoomCard = ({
  name,
  beds,
  filled,
  rent,
  per = 'bed',
  type = 'Sharing',
  status = 'Vacant',
}) => {
  const isVacant = status === 'Vacant' || filled < beds;
  const occText = isVacant
    ? `Occupied (${filled}/${beds})`
    : `Occupied (${beds}/${beds})`;
  const occTone = isVacant ? 'warning' : 'success';

  return (
    <Card
      style={{
        paddingVertical: 14,
        paddingHorizontal: 18,
        gap: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{ fontSize: 16, fontWeight: '800', color: theme.colors.ink }}
        >
          {name}
        </Text>
        <Chip
          text={`₹${rent.toLocaleString('en-IN')}${
            per === 'bed' ? '/bed' : ''
          }`}
        />
      </View>

      <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
        <Chip text={occText} tone={occTone} />
        <Chip text={type} />
        <Text style={{ color: theme.colors.muted }}>• {beds} beds</Text>
      </View>
    </Card>
  );
};

export default function Rooms({ navigation }) {
  // demo dataset
  const rooms = [
    {
      id: 1,
      name: 'Room 101',
      beds: 3,
      filled: 2,
      rent: 8000,
      per: 'bed',
      type: 'Sharing',
    },
    {
      id: 2,
      name: 'Room 102',
      beds: 1,
      filled: 0,
      rent: 10000,
      per: 'room',
      type: 'Single',
      status: 'Vacant',
    },
    {
      id: 3,
      name: 'Room 103',
      beds: 3,
      filled: 3,
      rent: 7500,
      per: 'bed',
      type: 'Sharing',
    },
    {
      id: 4,
      name: 'Room 104',
      beds: 2,
      filled: 1,
      rent: 9000,
      per: 'bed',
      type: 'Double',
    },
  ];

  const [tab, setTab] = useState('All'); // All | Vacant | Occupied
  const [q, setQ] = useState('');

  const summary = useMemo(() => {
    const totalBeds = rooms.reduce((a, r) => a + r.beds, 0);
    const filledBeds = rooms.reduce((a, r) => a + r.filled, 0);
    const vacantBeds = totalBeds - filledBeds;
    const vacantRooms = rooms.filter(r => r.filled < r.beds).length;
    return { totalBeds, filledBeds, vacantBeds, vacantRooms };
  }, [rooms]);

  const filtered = useMemo(() => {
    return rooms.filter(r => {
      const byTab =
        tab === 'All'
          ? true
          : tab === 'Vacant'
          ? r.filled < r.beds
          : r.filled === r.beds;
      const byQuery = [r.name, r.type]
        .join(' ')
        .toLowerCase()
        .includes(q.trim().toLowerCase());
      return byTab && byQuery;
    });
  }, [rooms, tab, q]);

  return (
    <Screen title="Rooms" scroll>
      {/* Hero summary */}
      <View
        style={{
          backgroundColor: theme.colors.primary,
          borderRadius: 20,
          padding: 18,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '800' }}>
          Occupancy Overview
        </Text>
        <Text style={{ color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>
          {summary.filledBeds}/{summary.totalBeds} beds filled •{' '}
          {summary.vacantBeds} beds vacant • {summary.vacantRooms} rooms with
          vacancies
        </Text>

        {/* Filters */}
        <View
          style={{
            marginTop: 12,
            backgroundColor: 'rgba(255,255,255,0.18)',
            borderRadius: 999,
            padding: 6,
            flexDirection: 'row',
            gap: 8,
            alignSelf: 'flex-start',
          }}
        >
          {['All', 'Vacant', 'Occupied'].map(f => (
            <FilterPill
              key={f}
              label={f}
              active={tab === f}
              onPress={() => setTab(f)}
            />
          ))}
        </View>
      </View>

      {/* Search */}
      <Card style={{ padding: 14 }}>
        <Text style={{ color: theme.colors.muted, marginBottom: 6 }}>
          Search rooms
        </Text>
        <View
          style={{
            backgroundColor: '#F1F5F9',
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 10,
          }}
        >
          <TextInput
            placeholder="Search by room no. or type (e.g., 102 / Single / Sharing)"
            placeholderTextColor="#9CA3AF"
            value={q}
            onChangeText={setQ}
          />
        </View>
      </Card>

      {/* List */}
      {filtered.length === 0 ? (
        <Card style={{ alignItems: 'center', padding: 24 }}>
          <Text style={{ color: theme.colors.muted }}>
            No rooms match your filters.
          </Text>
        </Card>
      ) : (
        <View style={{ gap: 12 }}>
          {filtered.map(r => (
            <RoomCard
              key={r.id}
              name={r.name}
              beds={r.beds}
              filled={r.filled}
              rent={r.rent}
              per={r.per}
              type={r.type}
              status={r.status || (r.filled < r.beds ? 'Vacant' : 'Occupied')}
            />
          ))}
        </View>
      )}

      {/* Actions */}
      <Card>
        <Button
          title="Add Room"
          onPress={() => {
            // navigate to Add Room form (create this next)
            // navigation.navigate('AddRoom', { pgId })
          }}
        />
      </Card>
    </Screen>
  );
}
