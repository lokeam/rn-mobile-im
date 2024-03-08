import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PageContainer from '../components/PageContainer';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import colors from '../constants/colors';

const AuthenticationScreen = (props) => {

    return (
      <SafeAreaView style={styles.container}>
        <PageContainer>
          <Input
            styles={styles.textLabel}
            label="First name"
            errorText=""
          />
          <Input
            styles={styles.textLabel}
            label="Last name"
            errorText=""
          />
          <Input
            styles={styles.textLabel}
            label="Email"
            errorText=""
          />
          <Input
            styles={styles.textLabel}
            label="Password"
            errorText=""
          />
          <SubmitButton
            onPress={() => console.log('Submit button pressed')}
            style={{ marginTop: 20 }}
            title="Sign up"
          />
        </PageContainer>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2a3942'
    },
    textLabel: {
      placeholder: "white",
    }
});

export default AuthenticationScreen;