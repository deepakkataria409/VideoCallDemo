import { Screen, Card, Button, Chip } from '../../components/Kit';
import { TextInput, View, Text } from 'react-native';
export default function Signup({ route, navigation }) {
  const role = route?.params?.role || 'owner';
  return (
    <Screen title={`Signup (${role})`}>
      <Card>
        <TextInput
          placeholder="Full Name"
          style={{
            backgroundColor: '#F1F5F9',
            borderRadius: 14,
            padding: 12,
            marginBottom: 10,
          }}
        />
        <TextInput
          placeholder="Email / Phone"
          style={{
            backgroundColor: '#F1F5F9',
            borderRadius: 14,
            padding: 12,
            marginBottom: 10,
          }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={{ backgroundColor: '#F1F5F9', borderRadius: 14, padding: 12 }}
        />
        <View style={{ height: 14 }} />
        <Button
          title="Create Account"
          onPress={() =>
            navigation.replace(role === 'owner' ? 'Owner' : 'Tenant')
          }
        />
        <View style={{ marginTop: 8, flexDirection: 'row', gap: 8 }}>
          <Chip text={role === 'owner' ? 'Owner' : 'Tenant'} />
          <Text style={{ color: '#64748B' }}>
            You can switch later with invite code.
          </Text>
        </View>
      </Card>
    </Screen>
  );
}
