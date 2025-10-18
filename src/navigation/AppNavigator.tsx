import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import OnBoarding from '../screens/OnBoarding';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Settings from '../screens/Settings';
import Progress from '../screens/Progress';
import CustomTab from './CustomTab';
import FocusChallenge from '../screens/FocusChallenge';

const Stack = createNativeStackNavigator<any>();

const AppNavigator: React.FC = () => {
  const onBoarding = useSelector((state: RootState) => state.user.onBoarding);

  return (
    <Stack.Navigator
      initialRouteName={onBoarding ? 'Home' : 'OnBoarding'}
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="FocusChallenge" component={FocusChallenge} />
    </Stack.Navigator>
  );
};

function MyTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
        }}
        tabBar={(props: any) => <CustomTab {...props} />}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Progress" component={Progress} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}

export default AppNavigator;
