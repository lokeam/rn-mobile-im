import React from 'react';
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
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const MsgScreen = (props) => {

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
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => console.log('add media pressed')}>
            <Feather name="paperclip" size={24} color="black" />
          </TouchableOpacity>
          <TextInput />
          <TouchableOpacity onPress={() => console.log('camera pressed')}>
            <MaterialIcons name="camera-alt" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
};

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
    paddingVertical: 8,
    paddingHorizontal: 10
  }
})

export default MsgScreen;