import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import pokemomAnimation from './pokemon.json'
import {
  Container, Content, Footer, SubTitle, Title, WrapperAnimation, WrapperImage
} from './styles';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';



export function Welcome() {
  const { navigate } = useNavigation()
  function handleNavigation() {
    navigate('Home')
  }
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
        <Button title='Iniciar' onPress={handleNavigation} />
      </Footer>
    </Container>
  )
}