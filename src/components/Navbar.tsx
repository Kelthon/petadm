import React from 'react';
import {Appbar} from 'react-native-paper';

function Navbar(): JSX.Element {
  return (
    <Appbar.Header>
      <Appbar.Content title="petadm" />
    </Appbar.Header>
  );
}

export default Navbar;
