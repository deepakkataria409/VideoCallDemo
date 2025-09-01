// src/auth/Login.js
import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import { Screen, Card, Button, Chip } from '../../components/Kit';
import { theme } from '../../design-system/theme';

export default function Login({ route, navigation }) {
  const role = route?.params?.role || 'owner';

  return (
    <Screen title={`Login (${role})`} scroll>
      {/* Hero */}
      <View
        style={{
          backgroundColor: theme.colors.primary,
          borderRadius: 22,
          padding: 20,
          overflow: 'hidden',
        }}
      >
        <Text style={{ fontSize: 42, marginBottom: 6 }}>🔐</Text>
        <Text style={{ color: 'white', fontSize: 22, fontWeight: '800' }}>
          Welcome back
        </Text>
        <Text style={{ color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>
          Sign in to continue managing your PG
        </Text>

        <View style={{ marginTop: 12, flexDirection: 'row', gap: 8 }}>
          <Chip text={role === 'owner' ? 'Owner' : 'Tenant'} />
          <Text style={{ color: 'rgba(255,255,255,0.75)' }}>
            You can switch later
          </Text>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', android: undefined })}
      >
        <Card style={{ padding: 20, gap: 12 }}>
          {/* Email/Phone */}
          <View>
            <Text style={{ marginBottom: 6, color: theme.colors.muted }}>
              Email / Phone
            </Text>
            <TextInput
              placeholder="you@example.com or +91-98xxxxxxx"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              style={{
                backgroundColor: '#F1F5F9',
                borderRadius: 14,
                padding: 14,
              }}
            />
          </View>

          {/* Password / OTP */}
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 6,
              }}
            >
              <Text style={{ color: theme.colors.muted }}>Password / OTP</Text>
              <Pressable
                onPress={() => {
                  /* todo: forgot flow */
                }}
              >
                <Text
                  style={{ color: theme.colors.primary, fontWeight: '700' }}
                >
                  Forgot?
                </Text>
              </Pressable>
            </View>
            <TextInput
              placeholder="••••••"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              style={{
                backgroundColor: '#F1F5F9',
                borderRadius: 14,
                padding: 14,
              }}
            />
            <Text
              style={{ marginTop: 6, color: theme.colors.muted, fontSize: 12 }}
            >
              Tip: If using OTP, just enter the code here.
            </Text>
          </View>

          {/* CTA */}
          <Button
            title="Continue"
            onPress={() =>
              navigation.replace(role === 'owner' ? 'Owner' : 'Tenant')
            }
          />

          {/* Divider */}
          <View style={{ alignItems: 'center', marginVertical: 4 }}>
            <Text style={{ color: theme.colors.muted, fontSize: 12 }}>or</Text>
          </View>

          {/* Secondary */}
          <Button
            variant="secondary"
            title="Create a new account"
            onPress={() => navigation.navigate('Signup', { role })}
          />
        </Card>
      </KeyboardAvoidingView>

      {/* Footer help */}
      <Text
        style={{ textAlign: 'center', color: theme.colors.muted, fontSize: 12 }}
      >
        By continuing you agree to our Terms & Privacy Policy
      </Text>
    </Screen>
  );
}
