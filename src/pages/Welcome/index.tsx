import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import pokemomAnimation from './pokemon.json'
import {
  Container, Content, Footer, SubTitle, Title, WrapperAnimation, WrapperImage
} from './styles';
import { Button } from '../../components/Button';

export function Welcome() {
  return (
    <Container>
      <Content>
        <WrapperAnimation>
          <WrapperImage>
            <AnimatedLottieView style={{ width: 200 }} autoPlay source={pokemomAnimation} loop />
          </WrapperImage>
        </WrapperAnimation>
        <Title> Bem Vindo</Title>
        <SubTitle>Encontre todos os pokémons em um só lugar</SubTitle>
      </Content>
      <Footer>
        <Button title='Iniciar' />
      </Footer>
    </Container>
  )
}