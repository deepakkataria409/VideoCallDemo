import { View } from 'react-native';
import { Screen, Card, Button } from '../../components/Kit';
export default function RoleSelect({ navigation }) {
  return (
    <Screen title="Welcome">
      <Card>
        <Button
          title="I am an Owner"
          onPress={() => navigation.navigate('Login', { role: 'owner' })}
        />
        <View style={{ height: 12 }} />
        <Button
          variant="secondary"
          title="I am a Tenant"
          onPress={() => navigation.navigate('Login', { role: 'tenant' })}
        />
      </Card>
    </Screen>
  );
}
