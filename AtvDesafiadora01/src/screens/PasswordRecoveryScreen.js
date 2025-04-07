import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PasswordRecoveryScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleRecover = () => {
    const tempPassword = Math.random().toString(36).slice(-8);
    setNewPassword(tempPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recover Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Recover Password" onPress={handleRecover} />
      {newPassword && (
        <Text style={styles.password}>New Password: {newPassword}</Text>
      )}
      <Button title="Back to Login" onPress={() => navigation.goBack()} />
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
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  password: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default PasswordRecoveryScreen;