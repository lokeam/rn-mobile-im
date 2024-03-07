import React, { useState } from 'react';
import {
  Button,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
 } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import backgroundImage from '../assets/images/bg_MsgScreenDark.jpeg';
import colors from '../constants/colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const MsgScreen = (props) => {
  const [messageText, setMessageText] = useState('');

    return (
      <SafeAreaView
        style={styles.container}
        edges={['right', 'left', 'bottom']}
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
        >
        </ImageBackground>
        <View style={styles.footerWrapper}>
          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={() => console.log('add media pressed')}>
              <FontAwesome5 name="plus" size={24} color="#8696a0" style={styles.footerIcon} />
            </TouchableOpacity>

            <TextInput
              onChangeText={text => setMessageText(text)}
              placeholder="Message"
              placeholderTextColor="#d1d7db"
              style={styles.textBox}
              value={messageText}
            />
            <TouchableOpacity
              onPress={() => console.log('camera pressed')}
              style={{ ...styles.mediaButton, ...styles.sendButton }}
            >
              { messageText === "" ? (
                <MaterialIcons name="camera-alt" size={28} color="#d1d7db" style={styles.footerIconCamera} />
              ) : (
                <MaterialIcons name="send" size={25} color="#d1d7db" style={styles.footerIconCamera} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
};

// To Research: Unistyles (https://reactnativeunistyles.vercel.app/)
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  inputContainer: {
    flexDirection: 'row',
    paddingVertical: 9,
    paddingHorizontal: 12
  },
  footerIcon: {
    paddingVertical: 8,
    paddingHorizontal: 8
  },
  footerIconCamera: {
  },
  footerWrapper: {
    backgroundColor: colors.headerFooterBackground,
    paddingVertical: 5,
  },
  mediaButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
  },
  sendButton: {
    backgroundColor: colors.messageSendButtonColor,
    borderRadius: 50
  },
  textBox: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.inputBackground,
    color: colors.messageTextColor,
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 12,
    marginHorizontal: 8
  }
})

export default MsgScreen;