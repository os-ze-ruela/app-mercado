import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from 'react-native-paper';

import * as Animatable from "react-native-animatable";
import { UserContext } from "../../Context/UserContext";

export default function Login() {
  const { login } = useContext(UserContext);
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email ou apelido</Text>
        <TextInput
          activeUnderlineColor={"#53E88B"}
          placeholder="Digite seu email ou apelido..."
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput  activeUnderlineColor={"#53E88B"} secureTextEntry={passwordVisible} 
        right={<TextInput.Icon name={passwordVisible ? "eye-off" : "eye"} 
        onPress={() => setPasswordVisible(!passwordVisible)} />} placeholder="Digite sua senha..." style={styles.input} />

        <TouchableOpacity style={styles.button} onPress={() => {login()}}>
          <Text tyle={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.registerText}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53E88B",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: 25,
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "transparent"
  },
  button: {
    borderColor: "#53E88B",
    borderWidth: 2,
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
  },
  buttonRegister: {
    marginTop: 18,
    alignSelf: "center",
  },
  registerText: {
    color: "#a1a1a1",
  },
});
