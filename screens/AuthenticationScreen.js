import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PageContainer from '../components/PageContainer';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

const AuthenticationScreen = (props) => {
  const [isSignUp, setIsSignUP] = useState(false);

    return (
      <SafeAreaView style={styles.container}>
        <PageContainer>
          { isSignUp ? (
            <SignUpForm />
          ) : (
            <SignInForm />
          )}
        </PageContainer>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2a3942'
    }
});

export default AuthenticationScreen;
