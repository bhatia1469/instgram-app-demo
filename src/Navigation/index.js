//Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import Splash from '../Screens/OuterStack/Splash';
import Login from '../Screens/OuterStack/Login';
import SignUp from '../Screens/OuterStack/SignUp';
import ForgotPassword from '../Screens/OuterStack/ForgotPassword';
import Verification from '../Screens/OuterStack/ForgotPassword/Verification';
import DASHBOARD from './Tabs';
import { ScreenNames } from '../Actions/types';
const Stack = createStackNavigator();

function OuterStack({ }) {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.SPLASH}
      screenOptions={{ headerShown: false, }}>
      <Stack.Screen name={ScreenNames.SPLASH} component={Splash} />
      <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
      <Stack.Screen name={ScreenNames.SIGNUP} component={SignUp} />
      <Stack.Screen name={ScreenNames.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ScreenNames.VERIFICATION} component={Verification} />
      <Stack.Screen name={ScreenNames.DASHBOARD} component={DASHBOARD} />
    </Stack.Navigator>
  );
}

function Outer_Navigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <OuterStack />
    </NavigationContainer>
  );
}

export default Outer_Navigator;