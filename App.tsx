import React from 'react';
import {View} from 'react-native';
import NavBar from './src/components/NavBar';
import Login from './src/pages/Login';
import Index from './src/pages/Index';
// import axios from 'axios';

// import {
//   Text,
//   Button,
//   TextInput,
//   ActivityIndicator,
// } from '@react-native-material/core';
// import Icon from 'react-native-remix-icon';

function App(): JSX.Element {
  return (
    <View>
      <NavBar />
      <Index />
      <Login />
    </View>
  );
}

export default App;
