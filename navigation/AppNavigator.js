import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import MainNavigator from './MainNavigator';
import SignUpScreen from '../screens/AuthenticationScreen';
import StartUpScreen from '../screens/StartUpScreen';


const AppNavigator = () => {
  const isAuthorized = useSelector(state => state.auth.token !== null && state.auth.token !== "");
  const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);

  return (
    <NavigationContainer>
      { isAuthorized && <MainNavigator /> }
      { !isAuthorized && didTryAutoLogin && <SignUpScreen /> }
      { !isAuthorized && !didTryAutoLogin && <StartUpScreen /> }
    </NavigationContainer>
  );
}

export default AppNavigator;
