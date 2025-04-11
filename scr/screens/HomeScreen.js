import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {

  return (
    <View>
      <Text>🎉 Bem-vindo, {user}!</Text>
      <Text>Explore roteiros culturais incríveis na sua região!</Text>
    </View>
  );
}