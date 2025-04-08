import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { users } from './authData';

// Componente de tela de Login
const LoginScreen = ({ navigation }) => {
  // Estado para armazenar o nome do usuário digitado
  const [username, setUsername] = useState('');
  // Estado para armazenar a senha digitada
  const [password, setPassword] = useState('');

  // Função para tratar o login, verificando se os dados conferem
  const handleLogin = () => {
    // Procura o usuário que possua username e password correspondentes aos digitados
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      // Se o usuário for encontrado, navega para a tela principal de estoque
      navigation.navigate('Stock');
    } else {
      // Se não for encontrado, exibe um alerta informando erro
      Alert.alert('Erro', 'Usuario ou Senha invalido');
    }
  };

  return (
    // Container principal com estilos definidos
    <View style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.title}>Login</Text>
      
      {/* Campo de texto para inserir o nome do usuário */}
      <TextInput
        style={styles.input}
        placeholder="Nome do Usuario"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      {/* Campo de texto para inserir a senha, ocultando os caracteres */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {/* Botão para acionar o login */}
      <Button title="Login" onPress={handleLogin} />
      
      {/* Link para navegação à tela de recuperação de senha */}
      <TouchableOpacity onPress={() => navigation.navigate('PasswordRecovery')}>
        <Text style={styles.link}>Esqueceu a Senha?</Text>
      </TouchableOpacity>
    </View>
  );
};

// Definição dos estilos para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente os elementos
    alignItems: 'center',     // Centraliza horizontalmente
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  link: {
    marginTop: 15,
    color: '#ed1515',
  },
});

// Exporta o componente para que possa ser utilizado em outros arquivos
export default LoginScreen;


//Guilherme Calandrim Fávero e Eli Hfni Mariano