import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StockContext } from '../context/StockContext';

const EditPartScreen = ({ route, navigation }) => {
  const { code } = route.params;
  const { stock, updatePart } = useContext(StockContext);
  const part = stock.find(p => p.code === code);
  const [quantity, setQuantity] = useState(part.quantity.toString());

  const handleSave = () => {
    if (quantity && !isNaN(quantity)) {
      updatePart(code, parseInt(quantity, 10));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Peça: {part.name}</Text>
      <Text style={styles.label}>Código: {part.code}</Text>
      <TextInput
        style={styles.input}
        placeholder="Nova Quantidade"
        keyboardType="numeric"
        value={quantid}
        onChangeText={setQuantity}
      />
      <Button
        title="Salvar Alterações"
        onPress={handleSave}
        color="#2196F3"
      />
    </View>
  );
};

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

export default EditPartScreen;