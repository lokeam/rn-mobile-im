import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PageContainer from '../components/PageContainer';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import colors from '../constants/colors';
import logo from '../assets/images/rn_mobile_im_logo.png';

const AuthenticationScreen = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "height" : null}
            keyboardVerticalOffset={75}
            style={styles.kbAvoidingView}
          >
            <PageContainer>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={logo}
                  resizeMode="contain"
                />
              </View>
              { isSignUp ? (
                <SignUpForm />
              ) : (
                <SignInForm />
              )}
            <TouchableOpacity
              onPress={() => setIsSignUp(prevState => !prevState)}
              style={styles.linkContainer}
            >
              <Text style={styles.link}>{`Switch to ${isSignUp ? 'sign in' : 'sign up'}`}</Text>
            </TouchableOpacity>
            </PageContainer>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2a3942'
    },
    image: {
      width: '65%',
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    kbAvoidingView: {
      flex: 1,
      justifyContent: 'center',
    },
    linkContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 15
    },
    link: {
      color: colors.messageLinkColor,
    }
});

export default AuthenticationScreen;
