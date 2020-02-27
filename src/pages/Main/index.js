import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';

import Header from '~/Components/Header';
import Tabs from '~/Components/Tabs';
import Menu from '~/Components/Menu';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 330.123,90</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 149.148,00 recebida de Cesar Vialpando hoje às
              18:37
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
