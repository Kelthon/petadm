import React, {useState} from 'react';
import {HStack, VStack} from 'react-native-flex-layout';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Surface, List, AnimatedFAB, Icon, useTheme} from 'react-native-paper';
import moment from 'moment';
import 'moment/locale/pt-br';

function capitalizeFirstLetter(str: string): string {
  let firstLetter = str[0].toUpperCase();
  let remainingString = str.slice(1);

  return `${firstLetter}${remainingString}`;
}

function getDate(): string {
  moment.updateLocale('pt-br', null);
  let dateString = moment().format('dddd, LL');

  return capitalizeFirstLetter(dateString);
}

export default function App() {
  const [user, setUser] = useState('Nome do usuário aqui');
  const [workedHours, setWorkedHours] = useState('4:00');
  const [overtime, setOvertime] = useState('0:00');
  const [remote, setRemote] = useState(false);

  const theme = useTheme();

  return (
    <View>
      <Surface style={styles.info}>
        <VStack spacing={10}>
          <Text variant="titleLarge">{getDate()}</Text>
          <Text variant="titleMedium">{user}</Text>
          <HStack spacing={50}>
            <View>
              <Text variant="titleMedium">Horas Trabalhadas</Text>
              <Text variant="titleLarge">{workedHours}</Text>
            </View>
            <View>
              <Text variant="titleMedium">Horas extras</Text>
              <Text variant="titleLarge">{overtime}</Text>
            </View>
          </HStack>
        </VStack>
      </Surface>
      <ScrollView style={styles.registry}>
        <List.Item title="1° Entrada" />
        <List.Item title="Intervalo" />
        <List.Item title="2° Entrada" />
        <List.Item title="Saída" />
      </ScrollView>
      <AnimatedFAB
        icon={<Icon source="timer-fill" size={40} />}
        style={styles.fab}
        theme={theme}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    padding: 8,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F16925',
  },
  registry: {
    padding: 8,
    paddingLeft: 20,
  },
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});
