import { Screen, Card, Button } from '../../components/Kit';
import { View, Text } from 'react-native';
export default function PayRent() {
  return (
    <Screen title="Pay Rent">
      <Card>
        <Text>Amount</Text>
        <Text style={{ fontSize: 28, fontWeight: '800' }}>₹8,000</Text>
        <Text style={{ color: '#64748B', marginTop: 6 }}>Due: 10 Aug</Text>
        <View style={{ height: 12 }} />
        <Button title="UPI / Card / Netbanking" onPress={() => {}} />
      </Card>
      <Card>
        <Text style={{ fontWeight: '700', marginBottom: 6 }}>
          Payment History
        </Text>
        <Text>Jul • ₹8,000 • Receipt</Text>
        <Text>Jun • ₹8,000 • Receipt</Text>
      </Card>
    </Screen>
  );
}
