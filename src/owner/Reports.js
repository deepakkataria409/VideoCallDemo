import { Screen, Card } from '../../components/Kit';
import { View, Text } from 'react-native';
export default function Reports() {
  return (
    <Screen title="Reports">
      <Card>
        <Text style={{ fontWeight: '700', marginBottom: 6 }}>
          Income vs Expenses
        </Text>
        <View
          style={{ backgroundColor: '#EEF2FF', height: 120, borderRadius: 12 }}
        />
      </Card>
      <Card>
        <Text style={{ fontWeight: '700', marginBottom: 6 }}>
          Occupancy Report
        </Text>
        <View
          style={{ backgroundColor: '#ECFDF5', height: 120, borderRadius: 12 }}
        />
      </Card>
    </Screen>
  );
}
