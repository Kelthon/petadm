import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-remix-icon';
import {
  Text,
  TextInput,
  Button,
  VStack,
  Switch,
  HStack,
} from '@react-native-material/core';

function Login(): JSX.Element {
  const [account, setAccount] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  return (
    <View>
      <VStack spacing={40}>
        <Text variant="h3">Entrar</Text>
        <VStack>
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
        </VStack>
        <HStack>
          <Switch />
          <Text>Lembrar-me</Text>
        </HStack>
        <VStack spacing={10}>
          <Button title="Login" loading={loading} />
          <Button title="Esqueci a senha" variant="text" />
          <Button title="Solicitar uma conta" variant="text" />
        </VStack>
      </VStack>
    </View>
  );
}

export default Login;
