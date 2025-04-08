import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { StockContext } from '../context/StockContext';

// Componente funcional da tela de estoque que recebe a propriedade navigation para navegação entre telas
const StockScreen = ({ navigation }) => {
  // Acessa o array 'stock' do contexto
  const { stock } = useContext(StockContext);

  // Função que renderiza cada item da lista de estoque
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      {/* Container que exibe as informações da peça */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>Código: {item.code}</Text>
        <Text>Quantidade: {item.quantity}</Text>
      </View>
      {/* Botão para navegar à tela de edição, passando o código da peça como parâmetro */}
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate('EditPart', { code: item.code })}
      >
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    // Container principal da tela com os estilos aplicados
    <View style={styles.container}>
      {/* Botão para navegar à tela de adição de uma nova peça */}
      <Button
        title="Adicionar Nova Peça"
        onPress={() => navigation.navigate('AddPart')}
      />
      {/* Lista dos itens do estoque renderizados a partir do FlatList */}
      <FlatList
        data={stock} // Dados a serem exibidos
        renderItem={renderItem} // Função que define como cada item será renderizado
        keyExtractor={item => item.code} // Chave única para cada item, baseada no código da peça
        contentContainerStyle={styles.list} // Estilo aplicado ao conteúdo da lista
      />
    </View>
  );
};

// Estilos utilizados na tela de estoque para layout, cores e formatação dos itens
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  list: {
    paddingBottom: 20,
  },
  item: {
    flexDirection: 'row', // Alinha os itens em linha (horizontal)
    justifyContent: 'space-between', // Espaço igual entre os elementos
    alignItems: 'center', // Alinha verticalmente no centro
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2, // Adiciona sombra, importante para efeito de elevação
  },
  infoContainer: {
    flex: 1, // Permite que o container ocupe o espaço restante
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  editButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
  },
});

// Exporta o componente para que possa ser utilizado em outras partes da aplicação
export default StockScreen;

//Guilherme Calandrim Fávero e Eli Hfni Mariano