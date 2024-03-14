import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ChatListingScreen = (props) => {

    return <View style={styles.container}>
        <Text>Message listing screen</Text>
        <Button title="Go to Msg Screen: " onPress={() => props.navigation.navigate("MsgScreen")}/>

    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ChatListingScreen;
