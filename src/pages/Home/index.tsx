import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Card, Pokemon, PokemonType } from '../../components/Card';
import api from '../../services/api';

import {
  Container, Title
} from './styles';


type RequestPokeInfo = {
  id: number
  types: PokemonType[]
}
export function Home() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get('/pokemon')
      const { results } = await response.data;
      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types } = await getMoreInfo(pokemon.url)
          return {
            name: pokemon.name,
            id,
            types
          }
        })
      )
      setPokemons(payloadPokemons)
    }
    getAllPokemons();
  }, [])

  async function getMoreInfo(url: string): Promise<RequestPokeInfo> {
    const response = await api.get(url)
    const { id, types } = await response.data;
    return {
      id, types
    }
  }
  // console.log(pokemons.map(pokemon => pokemon.name))
  return (
    <Container>
      <FlatList
        data={pokemons}
        renderItem={({ item: pokemon }) => (

          <Card data={pokemon} />

        )}
        keyExtractor={(index) => index.name}
      />
    </Container>
  )
}


