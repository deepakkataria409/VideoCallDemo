import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Screen, Card, Button, Chip } from '../../components/Kit';
import { theme } from '../../design-system/theme';

const AmenityPill = ({ label, selected, onPress }) => (
  <Pressable
    onPress={onPress}
    style={{
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 999,
      backgroundColor: selected ? theme.colors.ink : '#E5E7EB',
      marginRight: 8,
      marginBottom: 8,
    }}
  >
    <Text
      style={{
        color: selected ? 'white' : theme.colors.ink,
        fontWeight: '700',
      }}
    >
      {label}
    </Text>
  </Pressable>
);

export default function AddPG({ navigation }) {
  const [name, setName] = useState('');
  const [addr, setAddr] = useState('');
  const [rules, setRules] = useState('');
  const [amenities, setAmenities] = useState([
    'WiFi',
    'Meals',
    'Laundry',
    'CCTV',
    'Parking',
    'Housekeeping',
  ]);
  const [selected, setSelected] = useState(['WiFi', 'CCTV']);

  const toggleAmenity = a =>
    setSelected(prev =>
      prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a],
    );

  return (
    <Screen title="Add PG" scroll>
      {/* Hero */}
      <View
        style={{
          backgroundColor: theme.colors.primary,
          borderRadius: 22,
          padding: 20,
          marginBottom: 16,
        }}
      >
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '800' }}>
          Create a new PG
        </Text>
        <Text style={{ color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>
          Add basic details, amenities and house rules
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', android: undefined })}
      >
        {/* Basic Details */}
        <Card style={{ padding: 18 }}>
          <Text style={{ fontWeight: '700', marginBottom: 12 }}>
            Basic Details
          </Text>

          <Text style={{ color: theme.colors.muted, marginBottom: 6 }}>
            PG Name
          </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="e.g., Sunrise PG"
            placeholderTextColor="#9CA3AF"
            style={{
              backgroundColor: '#F1F5F9',
              borderRadius: 14,
              padding: 12,
            }}
          />

          <View style={{ height: 12 }} />
          <Text style={{ color: theme.colors.muted, marginBottom: 6 }}>
            Address
          </Text>
          <TextInput
            value={addr}
            onChangeText={setAddr}
            placeholder="House no, Street, Area, City, PIN"
            placeholderTextColor="#9CA3AF"
            multiline
            textAlignVertical="top"
            style={{
              backgroundColor: '#F1F5F9',
              borderRadius: 14,
              padding: 12,
              minHeight: 90,
            }}
          />
        </Card>

        {/* Amenities */}
        <Card style={{ padding: 18, marginTop: 12 }}>
          <Text style={{ fontWeight: '700', marginBottom: 12 }}>Amenities</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {amenities.map(a => (
              <AmenityPill
                key={a}
                label={a}
                selected={selected.includes(a)}
                onPress={() => toggleAmenity(a)}
              />
            ))}
          </View>
          <View style={{ marginTop: 10 }}>
            {selected.length ? (
              <Chip text={`${selected.length} selected`} tone="success" />
            ) : (
              <Chip text="None selected" tone="muted" />
            )}
          </View>
        </Card>

        {/* Rules / Notes */}
        <Card style={{ padding: 18, marginTop: 12 }}>
          <Text style={{ fontWeight: '700', marginBottom: 12 }}>
            House Rules / Notes
          </Text>
          <TextInput
            value={rules}
            onChangeText={setRules}
            placeholder="e.g., No loud music after 10 PM, Guests allowed till 9 PM…"
            placeholderTextColor="#9CA3AF"
            multiline
            textAlignVertical="top"
            style={{
              backgroundColor: '#F1F5F9',
              borderRadius: 14,
              padding: 12,
              minHeight: 100,
            }}
          />
          <Text
            style={{ color: theme.colors.muted, fontSize: 12, marginTop: 6 }}
          >
            Tip: You can edit these later from PG settings.
          </Text>
        </Card>

        {/* Actions */}
        <Card style={{ padding: 16, marginTop: 12 }}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <View style={{ flex: 1 }}>
              <Button
                title="Save PG"
                onPress={() => {
                  // placeholder action
                  navigation.goBack();
                }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                variant="secondary"
                title="Cancel"
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
        </Card>
      </KeyboardAvoidingView>
    </Screen>
  );
}
