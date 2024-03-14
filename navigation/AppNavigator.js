import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './MainNavigator';
import SignUpScreen from '../screens/AuthenticationScreen';
import { useSelector } from 'react-redux';

// testing auth / login screen
const isAuthorized = useSelector(state => state.auth.token !== null) && state.auth.token !== '';

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
