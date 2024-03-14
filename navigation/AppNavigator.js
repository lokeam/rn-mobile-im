import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import MainNavigator from './MainNavigator';
import SignUpScreen from '../screens/AuthenticationScreen';


const AppNavigator = () => {
  const isAuthorized = useSelector(state => state.auth.token !== null && state.auth.token !== "");

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
