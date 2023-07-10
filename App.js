import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {StatusBar} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import OnBoardScreen from './src/views/screens/OnBoardScreen'
import DetailsScreen from './src/views/screens/DetailsScreen'
import BottomNavigator from './src/views/navigation/BottomNavigator'
import COLORS from './src/constants/colors'


const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white}/>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='BoardScreen' component={OnBoardScreen}/>
        <Stack.Screen name='Home' component={BottomNavigator}/>
        <Stack.Screen name='DetailsScreen' component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;