import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { StockContext } from '../context/StockContext';

// Componente de tela para adicionar uma nova peça ao estoque
const AddPartScreen = ({ navigation }) => {
  // Estados para armazenar os dados da nova peça: nome, quantidade e código
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [code, setCode] = useState('');
  // Acessa a função addPart do contexto de estoque
  const { addPart } = useContext(StockContext);

  // Função que trata o salvamento da nova peça
  const handleSave = () => {
    // Verifica se todos os campos foram preenchidos
    if (name && quantity && code) {
      // Adiciona a nova peça, convertendo a quantidade para número inteiro
      addPart({
        name,
        quantity: parseInt(quantity, 10),
        code,
      });
      // Volta para a tela anterior após adicionar
      navigation.goBack();
    }
  };

  return (
    // Container principal da tela com estilos aplicados
    <View style={styles.container}>
      {/* Campo de entrada para o nome da peça */}
      <TextInput
        style={styles.input}
        placeholder="Nome da Peça"
        value={name}
        onChangeText={setName}
      />
      {/* Campo de entrada para a quantidade, configurado para aceitar apenas números */}
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />
      {/* Campo de entrada para o código único da peça */}
      <TextInput
        style={styles.input}
        placeholder="Código Único"
        value={code}
        onChangeText={setCode}
      />
      {/* Botão para salvar a nova peça, acionando a função handleSave */}
      <Button
        title="Salvar Peça"
        onPress={handleSave}
        color="#ed1515"
      />
    </View>
  );
};

// Estilos específicos para a tela de adicionar peça
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
});

// Exporta o componente para utilização em outras partes da aplicação
export default AddPartScreen;


//Guilherme Calandrim Fávero e Eli Hfni Mariano