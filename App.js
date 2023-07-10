import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import OnBoardScreen from './src/views/screens/OnBoardScreen'
import DetailsScreen from './src/views/screens/DetailsScreen'


const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='BoardScreen' component={OnBoardScreen}/>
        <Stack.Screen name='Home' component={BottomNavigator}/>
        <Stack.Screen name='DetailsScreen' component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;