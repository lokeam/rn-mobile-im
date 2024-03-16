import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import colors from '../constants/colors';
import commonStyles from '../constants/commonStyles';

const StartUpScreen = () => {

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
