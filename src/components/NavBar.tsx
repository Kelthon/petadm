import React from 'react';
import {View} from 'react-native';
import {AppBar, HStack, IconButton} from '@react-native-material/core';
import Icon from 'react-native-remix-icon';

function NavBar(): JSX.Element {
  return (
    <View>
      <AppBar
        title="PETADM"
        subtitle="UFCA"
        leading={<IconButton icon={<Icon name="menu-line" />} color="white" />}
        trailing={
          <HStack>
            <IconButton icon={<Icon name="user-fill" />} />
            <IconButton icon={<Icon name="more-2-line" />} />
          </HStack>
        }
      />
    </View>
  );
}

export default NavBar;
