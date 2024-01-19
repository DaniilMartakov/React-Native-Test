import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()


import React from 'react'
import Home from "./Home";
import FullPost from "./FullPost";
import { NavigationContainer } from "@react-navigation/native";

export default function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{title: 'News a world'}}/>
            <Stack.Screen name="FullPost" component={FullPost} options={{title: 'Full Post'}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

