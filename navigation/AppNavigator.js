import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './MainNavigator';
import SignUpScreen from '../screens/AuthenticationScreen';

// testing auth / login screen
const isAuthorized = false;

const AppNavigator = () => {
  return (
    <NavigationContainer>
      { isAuthorized ? (
        <MainNavigator />
      ) : (
        <SignUpScreen />
        )
      }
    </NavigationContainer>
  );
}

export default AppNavigator;
