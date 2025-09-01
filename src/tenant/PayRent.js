// src/tenant/PayRent.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Screen, Card, Button } from '../../components/Kit';
import { theme } from '../../design-system/theme';

const MethodButton = ({ label, onPress }) => (
  <Pressable
    onPress={onPress}
    style={{
      backgroundColor: '#F1F5F9',
      borderRadius: 14,
      paddingVertical: 14,
      paddingHorizontal: 16,
      marginBottom: 10,
    }}
  >
    <Text style={{ fontWeight: '700', color: theme.colors.ink }}>{label}</Text>
  </Pressable>
);

const HistoryRow = ({ month, amount, status }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    }}
  >
    <Text style={{ color: theme.colors.ink }}>{month}</Text>
    <Text style={{ fontWeight: '700' }}>{amount}</Text>
    <Text style={{ color: theme.colors.primary, fontWeight: '700' }}>
      {status}
    </Text>
  </View>
);

export default function PayRent() {
  const dueAmount = '₹8,000';
  const dueDate = '10 Aug';

  return (
    <Screen title="Pay Rent" scroll>
      {/* Current Due */}
      <Card style={{ padding: 20, alignItems: 'center' }}>
        <Text style={{ color: theme.colors.muted }}>Current Due</Text>
        <Text style={{ fontSize: 32, fontWeight: '800', marginTop: 6 }}>
          {dueAmount}
        </Text>
        <Text style={{ color: theme.colors.muted, marginTop: 4 }}>
          Due on {dueDate}
        </Text>
        <View style={{ height: 16 }} />
        <Button title="Pay Now" onPress={() => {}} />
      </Card>

      {/* Payment Methods */}
      <Card style={{ padding: 20 }}>
        <Text style={{ fontWeight: '700', marginBottom: 12 }}>
          Choose Payment Method
        </Text>
        <MethodButton label="💳 Card" onPress={() => {}} />
        <MethodButton label="📱 UPI" onPress={() => {}} />
        <MethodButton label="🏦 Netbanking" onPress={() => {}} />
      </Card>

      {/* Payment History */}
      <Card style={{ padding: 20 }}>
        <Text style={{ fontWeight: '700', marginBottom: 14 }}>
          Payment History
        </Text>
        <HistoryRow month="Jul 2025" amount="₹8,000" status="Receipt" />
        <HistoryRow month="Jun 2025" amount="₹8,000" status="Receipt" />
        <HistoryRow month="May 2025" amount="₹8,000" status="Receipt" />
      </Card>
    </Screen>
  );
}
