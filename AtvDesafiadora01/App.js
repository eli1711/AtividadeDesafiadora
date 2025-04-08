//Guilherme Calandrim Fávero e Eli Hfni Mariano



import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import { StockProvider } from './src/context/StockContext';
import LoginScreen from './src/screens/LoginScreen';
import PasswordRecoveryScreen from './src/screens/PasswordRecoveryScreen';
import StockScreen from './src/screens/StockScreen';
import AddPartScreen from './src/screens/AddPartScreen';
import EditPartScreen from './src/screens/EditPartScreen';

// Cria a constante 'Stack' para definir a pilha de navegação
const Stack = createStackNavigator();

// Componente principal da aplicação
export default function App() {
  return (
    // Envolve a aplicação com o provider para disponibilizar o contexto de estoque
    <StockProvider>
      {/* Container que gerencia a navegação */}
      <NavigationContainer>
        {/* View para aplicar estilos e definir o layout base */}
        <View style={styles.container}>
          {/* Define o estilo da barra de status */}
          <StatusBar style="auto" />
          {/* Configuração da pilha de navegação, com a tela inicial definida como "Login" */}
          <Stack.Navigator initialRouteName="Login">
            {/* Tela de login */}
            <Stack.Screen name="Login" component={LoginScreen} />
            {/* Tela de recuperação de senha com título customizado */}
            <Stack.Screen 
              name="PasswordRecovery" 
              component={PasswordRecoveryScreen} 
              options={{ title: 'Recuperar Senha' }}
            />
            {/* Tela principal de estoque com título customizado */}
            <Stack.Screen 
              name="Stock" 
              component={StockScreen} 
              options={{ title: 'Estoque' }}
            />
            {/* Tela para adicionar nova peça com título customizado */}
            <Stack.Screen 
              name="AddPart" 
              component={AddPartScreen} 
              options={{ title: 'Nova Peça' }}
            />
            {/* Tela para editar peça com título customizado */}
            <Stack.Screen 
              name="EditPart" 
              component={EditPartScreen} 
              options={{ title: 'Editar Peça' }}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </StockProvider>
  );
}

// Criação dos estilos usados no componente, definindo layout e cor de fundo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#996a6a',
  },
});
