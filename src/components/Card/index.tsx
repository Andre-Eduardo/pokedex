import React from 'react';

import { ImageCardDetailLeftSide, LeftSid, PokemonCard, PokemonContentType, PokemonId, PokemonName, PokemonType, PokemonTypeIcon, PokemonTypeText, RightSide } from './styles';
import dotsImage from '../../assets/img/dots.png'
import { TouchableOpacityProps } from 'react-native';

type PokemonType = {

  name: string

}
type Pokemon = {
  name: string
  url: string
  id: number
  types: PokemonType[]
}
type Props = {
  data: Pokemon
} & TouchableOpacityProps
export function Card({ data, ...rest }: Props) {

  return (
    <PokemonCard type={data.types[0].type.name} {...rest}>
      <LeftSid>
        <PokemonId>{data.id}</PokemonId>
        <PokemonName>{data.name}</PokemonName>
        <ImageCardDetailLeftSide source={dotsImage} />

        <PokemonContentType>

          {data.types.map(pokemonType =>
            <PokemonType type={pokemonType.type.name} key={pokemonType.type.name}>
              <PokemonTypeIcon></PokemonTypeIcon>
              <PokemonTypeText>{pokemonType.type.name}</PokemonTypeText>
            </PokemonType>
          )
          }

        </PokemonContentType>
      </LeftSid>
      <RightSide></RightSide>
    </PokemonCard>

  )
}