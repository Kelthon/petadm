import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-remix-icon';
import {
  Text,
  TextInput,
  Button,
  VStack,
  Switch,
  HStack,
} from '@react-native-material/core';

const styles = StyleSheet.create({
  logintext: {
    textAlign: 'center',
    marginTop: '20%',
  },
  Button: {
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginLeft: '10%',
  },
  ButtonContainer: {
    marginTop: '10%',
  },
  LoginContainer: {
    marginTop: '20%',
  },
});

function Login(): JSX.Element {
  const [account, setAccount] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  return (
    <View>
      <VStack spacing={-10}>
        <Text variant="h4" style={styles.logintext}>Login</Text>
        <VStack style={styles.LoginContainer} spacing={10}>
          <TextInput
            label="Conta"
            placeholder="email@example.com"
            onChangeText={setAccount}
          />
          <TextInput
            label="Senha"
            placeholder="digite sua senha"
            secureTextEntry={hidePassword}
            textContentType="password"
            onChangeText={setPassword}
          />
          <HStack>
            <Switch />
            <Text>Lembrar-me</Text>
          </HStack>
        </VStack>
        <VStack spacing={10} style={styles.ButtonContainer}>
          <Button title="Login" loading={loading} style={styles.Button} />
          <Button title="Esqueci a senha" style={styles.Button}/>
          <Button title="Solicitar uma conta" style={styles.Button}/>
        </VStack>
      </VStack>
    </View>
  );
}

export default Login;
