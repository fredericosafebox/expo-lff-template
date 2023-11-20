import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import HelloView from './src/components/hello';
import globalStyles from './src/styles';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Open up App.tsx to start working on your app!</Text>
      <HelloView />
      <StatusBar style="auto" />
    </View>
  );
}
