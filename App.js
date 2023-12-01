import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaInicial(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>esse é o início</Text>
      <Button title="Cadastro " onPress={()=>{
        navigation.navigate ('Cadastro')
      }}></Button>
      <StatusBar style="auto" />

    </View>
  );
}

function TelaCadastro(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>aqui faz o cadastro</Text>
      <Button title="Login" onPress={()=>{
        navigation.navigate ('Login')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaLogin(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>aqui faz o login</Text>
      <Button title="Perfil" onPress={()=>{
        navigation.navigate ('Perfil')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaPerfil(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>essa é a tela de Compras</Text>
      <Button title="Atendimento" onPress={()=>{
        navigation.navigate ('Atendimento')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaAtendimento(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela para atender os clientes</Text>
      <Button title="Início" onPress={()=>{
        navigation.navigate ('Início')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={TelaInicial} />
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Perfil" component={TelaPerfil} />
        <Stack.Screen name="Atendimento" component={TelaAtendimento} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})