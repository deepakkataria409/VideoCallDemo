import { Screen, Row, Card, Chip, Button } from '../../components/Kit';
import { View, Text } from 'react-native';
export default function Tenants({ navigation }) {
  return (
    <Screen
      title="Tenants"
      right={
        <Button
          title="Add Tenant"
          onPress={() => navigation.navigate('Tenants')}
        />
      }
    >
      <Row
        left="Rohan"
        subtitle="Room 101 • Paid"
        right={<Chip text="✅ Paid" tone="success" />}
      />
      <Row
        left="Priya"
        subtitle="Room 102 • Pending"
        right={<Chip text="❌ Pending" tone="danger" />}
      />
      <Row
        left="Aman"
        subtitle="Room 103 • Late"
        right={<Chip text="⚠ Late" tone="warning" />}
      />
    </Screen>
  );
}
