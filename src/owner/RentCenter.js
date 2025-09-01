import {
  Screen,
  Card,
  Row,
  Button,
  Chip,
  StatTile,
} from '../../components/Kit';
import { Text, View } from 'react-native';
export default function RentCenter() {
  return (
    <Screen title="Rent Summary">
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <StatTile label="Paid" value="₹2.4L" icon="✅" tone="#16A34A" />
        <StatTile label="Pending" value="₹80k" icon="⌛" tone="#F59E0B" />
      </View>
      <Row
        left="Rohan"
        subtitle="₹8,000 • Paid on 5 Aug"
        right={<Chip text="Paid" tone="success" />}
      />
      <Row
        left="Priya"
        subtitle="₹10,000 • Due 10 Aug"
        right={
          <Button
            variant="secondary"
            title="Send Reminder"
            onPress={() => {}}
          />
        }
      />
      <Card>
        <Button title="Generate Receipts" onPress={() => {}} />
      </Card>
    </Screen>
  );
}
