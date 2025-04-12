import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function LoginScreen() {

  return (
    <View>
      <Text>Rota Cultural</Text>
      <Text>Explore o interior com estilo</Text>
      
      <TextInput
        placeholder="Usuário ou E-mail"
        placeholderTextColor="#999"
        value={user}
        onChangeText={setUser}
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable onPress={handleLogin}>
        <Text>Entrar</Text>
      </Pressable>
    </View>
  );
}

