import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useTheme } from "../../context/theme";

import * as S from './styles'

export function Home() {
  const { handleChangeTheme } = useTheme()
  return <S.Container >
    <S.Title>Teste</S.Title>
    <TouchableOpacity
      style={{ marginTop: 20, backgroundColor: '#fafafa' }}
      onPress={handleChangeTheme}
    >
      <Text>Trocar tema</Text>
    </TouchableOpacity>
  </S.Container>
}