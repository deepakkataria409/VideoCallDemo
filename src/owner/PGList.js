import { Screen, Card, Button, Row } from '../../components/Kit';
import { View, Text } from 'react-native';
export default function PGList({ navigation }) {
  return (
    <Screen
      title="PG Management"
      right={
        <Button title="Add PG" onPress={() => navigation.navigate('Rooms')} />
      }
    >
      <Row left="Sunrise PG" subtitle="HSR Layout" right={<Text>›</Text>} />
      <Row left="GreenView PG" subtitle="Koramangala" right={<Text>›</Text>} />
      <Row left="CityNest PG" subtitle="Indiranagar" right={<Text>›</Text>} />
    </Screen>
  );
}
