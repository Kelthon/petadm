import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from '@react-native-material/core';

function Loader(): JSX.Element {
  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default Loader;
