import React from 'react';
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Screen, Row, Card, Button } from '../../components/Kit';

export default function TenantComplaints() {
  return (
    // scroll=true so list + form dono safe area & keyboard ke saath sahi behave kare
    <Screen title="Complaints" scroll>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', android: undefined })}
      >
        <Row
          left="WiFi not working"
          subtitle="Pending"
          right={<Text style={{ fontSize: 18 }}>›</Text>}
        />

        <Card>
          <TextInput
            placeholder="Describe issue..."
            placeholderTextColor="#9CA3AF"
            multiline
            textAlignVertical="top"
            style={{
              backgroundColor: '#F1F5F9',
              borderRadius: 14,
              padding: 12,
              minHeight: 120,
            }}
          />
          <View style={{ height: 10 }} />
          <Button title="Raise Complaint" onPress={() => {}} />
        </Card>
      </KeyboardAvoidingView>
    </Screen>
  );
}
