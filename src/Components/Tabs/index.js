import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabsContainer, TabItem, TabText} from './styles';

export default function Tabs({translateY}) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#fff" />
          <TabText>Indicar Amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="settings-cell" size={24} color="#fff" />
          <TabText>Recarga de Celular</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#fff" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#fff" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" rotate={90} size={24} color="#fff" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="settings-input-composite" size={24} color="#fff" />
          <TabText>Ajustar Limite</TabText>
        </TabItem>
        <TabItem>
          <Icon name="help-outline" size={24} color="#fff" />
          <TabText>Me ajuda</TabText>
        </TabItem>
        <TabItem>
          <Icon name="space-bar" size={24} color="#fff" />
          <TabText>Pagar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#fff" />
          <TabText>Bloquear Cartão</TabText>
        </TabItem>
        <TabItem>
          <Icon name="credit-card" size={24} color="#fff" />
          <TabText>Cartão Virtual</TabText>
        </TabItem>
        <TabItem>
          <Icon name="track-changes" size={24} color="#fff" />
          <TabText>Organizar Atalhos</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
