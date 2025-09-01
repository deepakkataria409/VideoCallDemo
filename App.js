import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RoleSelect from './src/auth/RoleSelect';
import Login from './src/auth/Login';
import Signup from './src/auth/Signup';
import OwnerDashboard from './src/owner/OwnerDashboard';
import PGList from './src/owner/PGList';
import Rooms from './src/owner/Rooms';
import Tenants from './src/owner/Tenants';
import RentCenter from './src/owner/RentCenter';
import Complaints from './src/owner/Complaints';
import Announcements from './src/owner/Announcements';
import Reports from './src/owner/Reports';
import TenantDashboard from './src/tenant/TenantDashboard';
import PayRent from './src/tenant/PayRent';
import TenantComplaints from './src/tenant/TenantComplaints';
import Notices from './src/tenant/Notices';
import Profile from './src/tenant/Profile';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function OwnerTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Dashboard" component={OwnerDashboard} />
      <Tab.Screen name="PGs" component={PGList} />
      <Tab.Screen name="Tenants" component={Tenants} />
      <Tab.Screen name="Rent" component={RentCenter} />
      <Tab.Screen
        name="More"
        component={MoreOwnerStack}
        options={{ title: 'More' }}
      />
    </Tab.Navigator>
  );
}

function MoreOwnerStack() {
  const S = createNativeStackNavigator();
  return (
    <S.Navigator screenOptions={{ headerShown: false }}>
      <S.Screen name="Complaints" component={Complaints} />
      <S.Screen name="Announcements" component={Announcements} />
      <S.Screen name="Reports" component={Reports} />
      <S.Screen name="Rooms" component={Rooms} />
    </S.Navigator>
  );
}

function TenantTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={TenantDashboard} />
      <Tab.Screen name="Pay" component={PayRent} />
      <Tab.Screen name="Complaints" component={TenantComplaints} />
      <Tab.Screen name="Notices" component={Notices} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RoleSelect" component={RoleSelect} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Owner" component={OwnerTabs} />
        <Stack.Screen name="Tenant" component={TenantTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
