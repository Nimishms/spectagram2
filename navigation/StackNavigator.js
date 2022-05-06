import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {createStackNavigator} from "@react-navigation/stack"
import tabNavigator from "./TabNavigator"
import PostScreen from '../screens/PostScreen'

const Stack = createStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator
        initialRouteName  = 'Home'
        screenOptions = {{
            headerShown: false
        }}
        >
        <Stack.Screen name = 'Home' component = {TabNavigator}/>
        <Stack.Screen name = 'PostScreen' component = {PostScreen}/>
        </Stack.Navigator>
       

    )
}

export default StackNavigator