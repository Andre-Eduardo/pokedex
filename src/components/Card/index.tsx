import React from 'react';

import { ImageCardDetailLeftSide, LeftSid, PokeballDetail, PokemonCard, PokemonContentType, PokemonId, PokemonImage, PokemonName, PokemonType, PokemonTypeIcon, PokemonTypeText, RightSide } from './styles';
import dotsImage from '../../assets/img/dots.png'
import pokeball from '../../assets/img/pokeballCard.png'
import { TouchableOpacityProps } from 'react-native';

export type PokemonType = {
  type: {
    name: string
  }

}
export type Pokemon = {
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
      <RightSide>
        <PokeballDetail source={
          pokeball
        } />
        <PokemonImage source={
          {
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
          }
        } />
      </RightSide>
    </PokemonCard>

  )
}