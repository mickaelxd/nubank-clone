import React from 'react';
import {Container} from './styles';

import Header from '~/Components/Header';
import Tabs from '~/Components/Tabs';

export default function Main() {
  return (
    <Container>
      <Header />
      <Tabs />
    </Container>
  );
}
