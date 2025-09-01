// src/tenant/TenantComplaints.js
import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import { Screen, Card, Button, Chip } from '../../components/Kit';
import { theme } from '../../design-system/theme';

const ComplaintItem = ({ title, status }) => {
  const tone =
    status === 'Pending'
      ? 'warning'
      : status === 'Resolved'
      ? 'success'
      : 'muted';
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
          {status}
        </Text>
      </View>
      <Chip text={status} tone={tone} />
    </Card>
  );
};

export default function TenantComplaints() {
  const [desc, setDesc] = useState('');
  const complaints = [
    { id: 1, title: 'WiFi not working', status: 'Pending' },
    { id: 2, title: 'Water leakage', status: 'Resolved' },
  ];

  return (
    <Screen title="Complaints" scroll>
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
          Track & raise issues
        </Text>
        <Text style={{ color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>
          Your complaints will be visible to the owner until resolved
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', android: undefined })}
      >
        {/* Existing complaints */}
        <View style={{ gap: 12, marginBottom: 16 }}>
          {complaints.map(c => (
            <ComplaintItem key={c.id} title={c.title} status={c.status} />
          ))}
        </View>

        {/* New complaint form */}
        <Card style={{ padding: 16 }}>
          <Text style={{ fontWeight: '700', marginBottom: 8 }}>
            Raise a new complaint
          </Text>
          <TextInput
            value={desc}
            onChangeText={setDesc}
            placeholder="Describe the issue..."
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
          <View style={{ height: 12 }} />
          <Button title="Submit" onPress={() => {}} />
        </Card>
      </KeyboardAvoidingView>
    </Screen>
  );
}
