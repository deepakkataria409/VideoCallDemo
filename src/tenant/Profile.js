import { Screen, Card, Chip } from '../../components/Kit';
import { Text } from 'react-native';
export default function Profile() {
  return (
    <Screen title="Profile">
      <Card>
        <Text style={{ fontWeight: '700' }}>Rohan Kumar</Text>
        <Text style={{ color: '#64748B', marginTop: 4 }}>
          rohan@example.com • +91-98xxxxxx
        </Text>
        <Chip text="Aadhar Uploaded" tone="success" />
      </Card>
      <Card>
        <Text style={{ fontWeight: '700' }}>Agreement</Text>
        <Text style={{ color: '#64748B', marginTop: 6 }}>
          Uploaded • 01 Aug
        </Text>
      </Card>
    </Screen>
  );
}
