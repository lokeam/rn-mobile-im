import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import colors from '../constants/colors';
import commonStyles from '../constants/commonStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setDidTryAutoLogin } from '../store/authSlice';

const StartUpScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const storedAuthInfo = await AsyncStorage.getItem('userData');

      if (!storedAuthInfo) {
        console.log('I am error. No storage found.')
        dispatch(setDidTryAutoLogin());
        return;
      }
    }

    tryLogin();
  }, [])
  return(
    <View style={commonStyles.center}>
      <ActivityIndicator
        color={colors.messageSendButtonColor}
        size="large"
      />
    </View>
  );
};

export default StartUpScreen;
