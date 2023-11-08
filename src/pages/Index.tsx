import axios from 'axios';
import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, SafeAreaView} from 'react-native';
import {
  ActivityIndicator,
  TextInput,
  Button,
  Snackbar,
} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LoginResponse = {
  jwt: string;
  user: {
    id: number;
    email: string;
    username: string;
    blocked: boolean;
    confirmed: boolean;
  };
};

type User = {
  id: number;
  jwt: string;
  email: string;
  username: string;
  blocked: boolean;
  confirmed: boolean;
};

function IndexPage(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [userSession, setUserSession] = useState<User | null>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [account, setAccount] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const fetchData = async () => {
    axios
      .get('http://localhost:1337/api/schedules?populate=*')
      .then(response => {})
      .catch(err => {})
      .finally(() => {});
  };

  const getUser = async () => {
    await AsyncStorage.getItem('user').then(user => {
      setUserSession(user !== null ? JSON.parse(user) : null);
    });
    fetchData();
  };

  const loginUser = async () => {
    setLoginLoading(true);
    axios
      .post<LoginResponse>('http://localhost:1337/api/auth/local', {
        identifier: account,
        password: password,
      })
      .then(async response => {
        const data = response.data;
        const user: User = {
          id: data.user.id,
          jwt: data.jwt,
          email: data.user.email,
          username: data.user.username,
          blocked: data.user.blocked,
          confirmed: data.user.confirmed,
        };

        await AsyncStorage.setItem('user', JSON.stringify(user))
          .then(() => {
            setLoginLoading(false);
          })
          .catch(err => {
            console.log(err.response);
          });
        setUserSession(user);
      });
  };

  return (
    <SafeAreaView>
      <Image
        source={require('../../public/petadm_horizontal.png')}
        style={styles.image}
      />
      {userSession === null ? (
        <>
          <TextInput label="Conta" onChangeText={setAccount}/>
          <TextInput
            label="Senha"
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
            onChangeText={setPassword}
          />
          <Button
            mode="contained"
            style={styles.btn}
            textColor="#000000"
            buttonColor="#F15921"
            onPress={loginUser}>
            {loginLoading && (
              <ActivityIndicator color="#000000" animating={loading} />
            )}
            Entrar
          </Button>
        </>
      ) : (
        <ActivityIndicator color="#F15921" animating={loading} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  image: {
    transform: [
      {translateX: -Dimensions.get('window').width * 0.18},
      {scale: Dimensions.get('window').width / 512},
    ],
  },

  btn: {
    marginVertical: 15,
    marginHorizontal: 120,
  },
});

export default IndexPage;
