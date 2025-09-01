// src/owner/PGList.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Screen, Card, Button } from '../../components/Kit';
import { theme } from '../../design-system/theme';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 👈 RN CLI-friendly

export default function PGList({ navigation }) {
  const pgs = [
    { id: 1, name: 'Sunrise PG', location: 'HSR Layout' },
    { id: 2, name: 'GreenView PG', location: 'Koramangala' },
    { id: 3, name: 'CityNest PG', location: 'Indiranagar' },
  ];

  return (
    <Screen
      title="PG Management"
      right={
        <Button title="Add PG" onPress={() => navigation.navigate('Rooms')} />
      }
      scroll
    >
      {/* Hero */}
      <View
        style={{
          backgroundColor: theme.colors.primary,
          borderRadius: 20,
          padding: 18,
          marginBottom: 16,
        }}
      >
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '800' }}>
          Manage your properties
        </Text>
        <Text style={{ color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>
          Tap on a PG to view rooms, tenants, and rent
        </Text>
      </View>

      {/* PG List */}
      {pgs.length === 0 ? (
        <Card style={{ alignItems: 'center', padding: 24 }}>
          <Text style={{ color: theme.colors.muted }}>
            No PGs added yet. Tap "Add PG" to get started.
          </Text>
        </Card>
      ) : (
        <View style={{ gap: 12 }}>
          {pgs.map(pg => (
            <Pressable
              key={pg.id}
              onPress={() => navigation.navigate('Rooms', { pgId: pg.id })}
            >
              <Card
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 16,
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
                    {pg.name}
                  </Text>
                  <Text style={{ color: theme.colors.muted, marginTop: 2 }}>
                    {pg.location}
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={theme.colors.muted}
                />
              </Card>
            </Pressable>
          ))}
        </View>
      )}
    </Screen>
  );
}
