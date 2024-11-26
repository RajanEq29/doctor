import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Slot } from 'expo-router';


import ProfileScreen from './profile';
import explore from './explore'
import { TabBarIcon } from '@/app/navigation/TabBarIcon';

const Tab = createBottomTabNavigator();

export default function TabLayout() {


  return (
    <Tab.Navigator
      screenOptions={{
        
        headerShown: false, 
        tabBarStyle: styles.tabBarStyle, 
      }}
    >
      <Tab.Screen
        name="explore"
        options={{
          title: 'OTP',
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focusedIconContainer : styles.iconContainer}>
              <TabBarIcon name={focused ? 'key' : 'key-outline'} color={'#050A30'} />
            </View>
          ),
        }}
        component={explore}
      />
      <Tab.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focusedIconContainer : styles.iconContainer}>
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={'#050A30'} />
            </View>
          ),
        }}
        component={Slot}
      />
      <Tab.Screen
        name="profile"

        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focusedIconContainer : styles.iconContainer}>
              <TabBarIcon name={focused ? 'person' : 'person-outline'} color={'#050A30'} />
            </View>
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

// Styles for the Tab Navigator and Icons
const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    height: 60, 
  },
  iconContainer: {
    marginTop: 0,
    borderRadius: 10,
    height: 35,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'white',
  },
  focusedIconContainer: {
    marginTop: -30,
    borderRadius: 50,
    shadowColor: '#000',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'white',
    borderWidth: 4,
    borderColor: '#F0F1F6',
  },
});
