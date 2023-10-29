import React from 'react';
import {Text, View} from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';

function capitalizeFirstLetter(str: string): string {
  let firstLetter = str[0].toUpperCase();
  let remainingString = str.slice(1);

  return `${firstLetter}${remainingString}`;
}

function getDate(): string {
  moment.locale('pt-br');
  let dateString = moment().format('dddd, LL');

  return capitalizeFirstLetter(dateString);
}

export default function App() {
  return (
    <View>
      <Text>{getDate()}</Text>
    </View>
  );
}
