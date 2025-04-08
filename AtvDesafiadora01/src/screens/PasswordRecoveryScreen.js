import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { users } from './authData';

// Componente para recuperação de senha
const PasswordRecoveryScreen = ({ navigation }) => {
  // Estado para armazenar o nome do usuário digitado
  const [username, setUsername] = useState('');
  // Estado para armazenar a senha recuperada (se existir)
  const [recoveredPassword, setRecoveredPassword] = useState('');

  // Função que busca o usuário na lista e define a senha recuperada
  const handleRecover = () => {
    // Procura o usuário que tenha o mesmo username digitado
    const user = users.find(u => u.username === username);
    // Atualiza o estado com a senha do usuário, se encontrado; caso contrário, define string vazia
    setRecoveredPassword(user ? user.password : '');
  };

  return (
    // Container principal com estilos aplicados
    <View style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.title}>Recupere sua senha aqui</Text>
      
      {/* Input para digitar o nome do usuário */}
      <TextInput
        style={styles.input}
        placeholder="Digite o Usuario"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      
      {/* Botão que aciona a função de recuperação de senha */}
      <Button 
        title="Recuperar Senha" 
        onPress={handleRecover} 
      />
      
      {/* Condicional para exibir a senha recuperada ou mensagem caso o usuário não seja encontrado */}
      {recoveredPassword ? (
        <View style={styles.passwordContainer}>
          <Text style={styles.passwordLabel}>Sua senha é:</Text>
          <Text style={styles.passwordText}>{recoveredPassword}</Text>
        </View>
      ) : (
        <Text style={styles.notFoundText}>
          {username ? 'Usuario esquecido não foi encontrado ' : 'Entre com seu usuario para recuperar a senha'}
        </Text>
      )}
      
      {/* Botão para retornar à tela de Login */}
      <Button 
        title="Voltar a tela de Login" 
        onPress={() => navigation.goBack()} 
        color="#ed1515"
        style={styles.backButton}
      />
    </View>
  );
};

// Definição dos estilos para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',     // Centraliza horizontalmente
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

// Exporta o componente para uso em outras partes da aplicação
export default PasswordRecoveryScreen;


//Guilherme Calandrim Fávero e Eli Hfni Mariano