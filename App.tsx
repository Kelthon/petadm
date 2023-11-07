import React from 'react';
import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import RemixIcon from 'react-native-remix-icon';
import NavBar from './src/components/NavBar';
import Index from './src/pages/Index';
import lightTheme from './theme';
import Login from './src/pages/Login';
// import axios from 'axios';

function RemixIconAdapter(props: any) {
  return <RemixIcon name={props?.source} {...props} />;
}

function App(): JSX.Element {
  return (
    <PaperProvider
      settings={{
        icon: props => <RemixIconAdapter {...props} />,
      }}
      theme={lightTheme}>
      <SafeAreaView>
        <NavBar />
        <Login />
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
