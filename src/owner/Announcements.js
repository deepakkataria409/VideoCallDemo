import { Screen, Card, Button } from '../../components/Kit';
import { TextInput, View } from 'react-native';
export default function Announcements() {
  return (
    <Screen title="Announcements">
      <Card>
        <TextInput
          placeholder="Title"
          style={{
            backgroundColor: '#F1F5F9',
            borderRadius: 14,
            padding: 12,
            marginBottom: 10,
          }}
        />
        <TextInput
          multiline
          placeholder="Message..."
          style={{
            backgroundColor: '#F1F5F9',
            borderRadius: 14,
            padding: 12,
            minHeight: 120,
          }}
        />
        <View style={{ height: 12 }} />
        <Button title="Broadcast" onPress={() => {}} />
      </Card>
    </Screen>
  );
}
