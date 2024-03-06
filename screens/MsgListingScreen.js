import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ChatListingScreen = (props) => {

    return <View style={styles.container}>
        <Text>Message listing screen</Text>
        <Button title="Go to Settings: " onPress={() => props.navigation.navigate("MsgSettings")}/>

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