import { Screen, Card, Button, Row, Chip } from '../../components/Kit';
import { View, Text } from 'react-native';
export default function Rooms() {
  return (
    <Screen title="Rooms">
      <Row
        left="Room 101"
        subtitle="Occupied (2/3)"
        right={<Chip text="₹8,000/bed" />}
      />
      <Row left="Room 102" subtitle="Vacant" right={<Chip text="₹10,000" />} />
      <Row
        left="Room 103"
        subtitle="Occupied (3/3)"
        right={<Chip text="₹7,500/bed" />}
      />
      <Card>
        <Button title="Add Room" onPress={() => {}} />
      </Card>
    </Screen>
  );
}
