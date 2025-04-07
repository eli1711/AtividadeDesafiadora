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

const Stack = createStackNavigator();

export default function App() {
  return (
    <StockProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen 
              name="PasswordRecovery" 
              component={PasswordRecoveryScreen} 
              options={{ title: 'Recuperar Senha' }}
            />
            <Stack.Screen 
              name="Stock" 
              component={StockScreen} 
              options={{ title: 'Estoque' }}
            />
            <Stack.Screen 
              name="AddPart" 
              component={AddPartScreen} 
              options={{ title: 'Nova Peça' }}
            />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});