import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import pokemomAnimation from './pokemon.json'
import {
  Container, Content, Footer, SubTitle, Title
} from './styles';

export function Welcome() {
  return (
    <Container>
      <Content>
        <AnimatedLottieView autoPlay source={pokemomAnimation} loop />
      </Content>
      <Footer>
        <Title> Bem Vindo</Title>
        <SubTitle>Encontre todos os pokémons em um só lugar</SubTitle>
      </Footer>
    </Container>
  )
}