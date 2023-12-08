import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable, Image, Dimensions, TextInput} from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaInicial(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Seja bem-vindo</Text>
   
   <Pressable style={styles.Button} onPress={()=>{
     navigation.navigate ('Login')
   }}>
   <Text>Login</Text>

   </Pressable>

   <Pressable style={styles.Button} onPress={()=>{
     navigation.navigate ('Cadastro')
   }}>
       <Text>Cadastro</Text>

   </Pressable>

   <StatusBar style="auto" />
   <Text style={styles.text}>VIVARA</Text>
 </View>
  );
}

function TelaCadastro(){
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Digite seus dados</Text>
      <TextInput placeholder="E-mail" style={styles.input} onChangeText={onChangeText} value={text}/>
      <TextInput 
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput 
        placeholder="Nome Completo"
        keyboardType="text"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
       <TextInput 
        placeholder="Data de Nascimento"
        keyboardType="text"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput 
        placeholder="CPF"
        keyboardType="number"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput 
        placeholder="Senha"
        keyboardType="text"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput 
        placeholder="Endereço"
        keyboardType="text"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
       <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input}/>
      <Pressable style={styles.Button} onPress={()=>{
        navigation.navigate ('Login')
      }}>
        <Text style={styles.text}>Cadastre-se</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaLogin(){
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Faça seu login</Text>
    <StatusBar style="auto" />
    <TextInput
      placeholder="E-mail/CPF"
      keyboardType="address"
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
    />
    <TextInput
      placeholder="Senha"
      keyboardType="number"
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
    />

    <Pressable style={styles.Button} onPress={()=>{
      navigation.navigate ('Perfil')
    }}>
      <Text style={styles.text}>Logar</Text>
    </Pressable>
    <StatusBar style="auto" />
    <Text>{text}</Text>
  </View>
  );
}

function TelaPerfil(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <Text style={styles.text}>VIVARA</Text>
    <Image
      style={styles.image2}
      source={{
        uri: 'https://lojavivara.vtexassets.com/arquivos/ids/336754/Pingente-Personalizavel-Coracao-Ouro-Rose-6099_set.jpg?v=638114883127230000.png',
      }}
    />
    <Image
      style={styles.image3}
      source={{
        uri: 'https://lojavivara.vtexassets.com/arquivos/ids/566260/Anel-Cores-em-Ouro-Rose-18k-com-Topazio-Verde-e-Diamantes-9069_hover.jpg?v=638286187100400000.png',
      }}
    />

   <Pressable style={styles.Button} onPress={()=>{
     navigation.navigate ('Perfil')
   }}>
       <Text>Enter</Text>

   </Pressable>


    <Image
      style={styles.image4}
      source={{
        uri: 'https://static.glami.com.br/img/520x520bt/224973528.png',
      }}
    />
    <Image
      style={styles.image5}
      source={{
        uri: 'https://lojavivara.vtexassets.com/arquivos/ids/180687/Anel-Life-Topazio-Azul-m2780093_set.png?v=637867693384030000.png',
      }}
      />
     
  </View>
  
  );
  
}

function TelaAtendimento(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>essa é a tela do Atendimento</Text>
      <Pressable style={styles.Button} onPress={()=>{
        navigation.navigate ('Início')
      }}>
      </Pressable>
      <StatusBar style="auto" />
      <Text style={styles.text}>VIVARA</Text>
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
    backgroundColor: '#9747FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#D1D5DA',
  },
  Button:{
    backgroundColor:"#FFFFFF",
    color: "black",
    borderRadius: 15,
    margin: 15,
    padding: 10,
    width: Dimensions.get('screen').width / 10,
    height:  Dimensions.get('screen').height / 15,

    textAlign: "center",
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "gray",
    display: 'flex',
    alignItems: "center"
  },
  text:{
    fontFamily:"times",
    fontSize:20,
    color:"##1E1E1E",
  },
  text1:{
    fontFamily:"times",
    fontSize:20,
    color:"##1E1E1E",
    textDecorationLine: 'underline',
  },
  text2:{
    fontFamily:"times",
    fontSize:9,
    color:"#230B41",
  },
  text3:{
    fontFamily:"times",
    fontSize:20,
    color:"##1E1E1E",
    textDecorationLine: 'underline',
  },
  text4:{
    fontFamily:"times",
    fontSize:17,
    color: "#FFFFFF",
  },
  text5:{
    fontFamily:"times",
    fontSize:9,
    color:"#FFFFFF",

  },
  image1:{
    width: "200px",
    height:"200px",
    borderRadius: "100px",
    border: "8px solid #794A86",
    
  },
  image2:{
    width: "400px",
    height:"300px",
    borderRadius: "20px",
    border: "8px solid #794A86",
  },
 
  image3:{
    width: "400px",
    height:"300px",
    borderRadius: "20px",
    border: "8px solid #794A86",
  },
});