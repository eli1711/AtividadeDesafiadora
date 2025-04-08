import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StockContext } from '../context/StockContext';

// Componente para edição de informações de uma peça
const EditPartScreen = ({ route, navigation }) => {
  // Recupera o código da peça passado via parâmetros de rota
  const { code } = route.params;
  // Acessa os dados do estoque e a função para atualizar uma peça através do contexto
  const { stock, updatePart } = useContext(StockContext);
  // Busca a peça específica no estoque pelo código
  const part = stock.find(p => p.code === code);
  // Estado para armazenar e gerenciar a quantidade, convertida para string para compatibilidade com TextInput
  const [quantity, setQuantity] = useState(part.quantity.toString());

  // Função que atualiza a quantidade e retorna para a tela anterior
  const handleSave = () => {
    // Verifica se a quantidade é um número válido antes de atualizar
    if (quantity && !isNaN(quantity)) {
      // Converte a quantidade para número inteiro e atualiza a peça
      updatePart(code, parseInt(quantity, 10));
      // Retorna para a tela anterior após salvar
      navigation.goBack();
    }
  };

  return (
    // Container principal com os estilos aplicados
    <View style={styles.container}>
      {/* Exibe o nome da peça */}
      <Text style={styles.label}>Peça: {part.name}</Text>
      {/* Exibe o código da peça */}
      <Text style={styles.label}>Código: {part.code}</Text>
      {/* Campo de entrada para a nova quantidade, configurado para entrada numérica */}
      <TextInput
        style={styles.input}
        placeholder="Nova Quantidade"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />
      {/* Botão para salvar as alterações com cor customizada */}
      <Button
        title="Salvar Alterações"
        onPress={handleSave}
        color="#ed1515"
      />
    </View>
  );
};

// Definição dos estilos para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
});

// Exporta o componente para que possa ser utilizado em outros módulos
export default EditPartScreen;


//Guilherme Calandrim Fávero e Eli Hfni Mariano