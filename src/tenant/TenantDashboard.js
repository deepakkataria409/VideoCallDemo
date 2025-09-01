import { Screen, Row, Card, Button, Chip } from '../../components/Kit';
import { View, Text } from 'react-native';
export default function TenantDashboard({ navigation }) {
  return (
    <Screen title="Overview">
      <Card>
        <Text style={{ fontSize: 16, fontWeight: '700' }}>Rent Due</Text>
        <Text style={{ marginTop: 6, color: '#64748B' }}>
          ₹8,000 due on 10 Aug
        </Text>
        <View style={{ height: 10 }} />
        <Button title="Pay Now" onPress={() => navigation.navigate('Pay')} />
      </Card>
      <Row
        left="Room 101 • 2/3 beds"
        subtitle="Sunrise PG, HSR"
        right={<Chip text="Good" tone="success" />}
      />
      <Row
        left="Active Complaints"
        subtitle="1 open"
        right={<Chip text="Pending" tone="warning" />}
      />
      <Row left="Notices" subtitle="2 new" right={<Text>›</Text>} />
    </Screen>
  );
}
