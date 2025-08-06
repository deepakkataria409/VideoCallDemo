import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function AppDrawer({ user, onLogout }) {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeTabs">
        {props => <TabNavigator {...props} user={user} onLogout={onLogout} />}
      </Drawer.Screen>
      <Drawer.Screen name="Profile">
        {props => <ProfileScreen {...props} user={user} onLogout={onLogout} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
