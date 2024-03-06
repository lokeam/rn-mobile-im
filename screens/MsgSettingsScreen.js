import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MsgSettingsScreen = (props) => {

    return <View style={styles.container}>
        <Text>Message settings screen</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MsgSettingsScreen;