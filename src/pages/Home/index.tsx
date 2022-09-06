import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Card, Pokemon, PokemonType } from '../../components/Card';
import api from '../../services/api';
import pokebollHeader from '../../assets/img/pokeball.png'
import {
  Container, Header, Title
} from './styles';
import { useNavigation } from '@react-navigation/native';


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
  const { navigate } = useNavigation()
  function handleNavigation(pokemonId: Number) {
    navigate('About', {
      pokemonId,
    })
  }

  return (
    <Container>
      <FlatList
        ListHeaderComponent={
          <>
            <Header source={pokebollHeader} />
            <Title>Pokédex</Title>
          </>
        }
        contentContainerStyle={{
          paddingHorizontal: 20
        }}
        data={pokemons}
        renderItem={({ item: pokemon }) => (

          <Card data={pokemon} onPress={() => handleNavigation(pokemon.id)} />
        )}
        keyExtractor={(index) => index.name}
      />
    </Container>
  )
}


