// src/auth/Login.js
import { Screen, Card, Button } from '../../components/Kit';
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login({ route, navigation }) {
  const role = route?.params?.role || 'owner';
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
      <StatusBar style="dark" />
      <Screen title={`Login (${role})`} scroll>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'padding', android: undefined })}
        >
          <Card>
            <Text style={{ marginBottom: 6, color: '#64748B' }}>
              Email / Phone
            </Text>
            <TextInput
              placeholder="you@example.com"
              style={{
                backgroundColor: '#F1F5F9',
                borderRadius: 14,
                padding: 12,
              }}
            />
            <View style={{ height: 10 }} />
            <Text style={{ marginBottom: 6, color: '#64748B' }}>
              Password / OTP
            </Text>
            <TextInput
              placeholder="••••••"
              secureTextEntry
              style={{
                backgroundColor: '#F1F5F9',
                borderRadius: 14,
                padding: 12,
              }}
            />
            <View style={{ height: 14 }} />
            <Button
              title="Continue"
              onPress={() =>
                navigation.replace(role === 'owner' ? 'Owner' : 'Tenant')
              }
            />
            <View style={{ height: 10 }} />
            <Button
              variant="secondary"
              title="Signup"
              onPress={() => navigation.navigate('Signup', { role })}
            />
          </Card>
        </KeyboardAvoidingView>
      </Screen>
    </SafeAreaView>
  );
}
