import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MsgListingScreen from '../screens/MsgListingScreen';
import MsgSettingsScreen from '../screens/MsgSettingsScreen';
import GeneralSettingsScreen from '../screens/GeneralSettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerTitle: ""
    }}>
      <Tab.Screen
        name="MsgList"
        component={MsgListingScreen}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: () => (
            <MaterialIcons name="chat-bubble-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={GeneralSettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: () => (
            <MaterialIcons name="settings" size={24} color="black" />
          )
        }}
      />
    </Tab.Navigator>
  )
};

const MainNavigator = (props) => {

  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="MsgSettings"
          component={MsgSettingsScreen}
          options={{
            headerTitle: "Settings"
          }}
        />
      </Stack.Navigator>
  );
}

export default MainNavigator;
