import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>🎉 Bem-vindo, {user}!</Text>
      <Text style={styles.message}>Explore roteiros culturais incríveis na sua região!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8eefe',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#172c66',
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    color: '#1b1b1b',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
