// App.js
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './navigation/AuthStack';
import AppDrawer from './navigation/AppDrawer';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('@user_data')
      .then(json => json && setUser(JSON.parse(json)))
      .catch(console.error);
  }, []);

  const handleLogin = userData => {
    AsyncStorage.setItem('@user_data', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    AsyncStorage.removeItem('@user_data');
    setUser(null);
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {user ? (
          <AppDrawer user={user} onLogout={handleLogout} />
        ) : (
          <AuthStack onLogin={handleLogin} />
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
