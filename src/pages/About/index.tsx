import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';

import {
  Container
} from './styles';

type RouteParamns = {
  pokemonId: Number
}

export function About() {
  const route = useRoute()
  const { pokemonId } = route.params as RouteParamns
  return (
    <Container>
      <Text>{pokemonId}</Text>
    </Container>
  )
}