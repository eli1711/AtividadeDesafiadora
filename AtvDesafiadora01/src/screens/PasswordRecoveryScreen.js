import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { users } from './authData';

const PasswordRecoveryScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [recoveredPassword, setRecoveredPassword] = useState('');

  const handleRecover = () => {
    const user = users.find(u => u.username === username);
    setRecoveredPassword(user ? user.password : '');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recupere sua senha aqui</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite o Usuario"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      
      <Button 
        title="Recuperar Senha" 
        onPress={handleRecover} 
      />
      
      {recoveredPassword ? (
        <View style={styles.passwordContainer}>
          <Text style={styles.passwordLabel}>Sua senha é:</Text>
          <Text style={styles.passwordText}>{recoveredPassword}</Text>
        </View>
      ) : (
        <Text style={styles.notFoundText}>
          {username ? 'Username not found' : 'Entre com seu usuario para recuperar a senha'}
        </Text>
      )}
      
      <Button 
        title="Voltar a tela de Login" 
        onPress={() => navigation.goBack()} 
        color="#999"
        style={styles.backButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  passwordContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  passwordLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  passwordText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  notFoundText: {
    marginTop: 20,
    color: '#666',
    fontStyle: 'italic',
  },
  backButton: {
    marginTop: 30,
  },
});

export default PasswordRecoveryScreen;