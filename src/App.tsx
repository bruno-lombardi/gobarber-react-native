import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Routes from './routes'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#312e38" />
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Routes />
      </View>
    </NavigationContainer>
  )
}

export default App
