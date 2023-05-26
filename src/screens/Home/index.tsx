import { useEffect, useState } from 'react';
import * as S from './styles';
import api from '../../services/api';
import { Text } from 'react-native';

type PokemonType = {
  type: string;
};

type Pokemon = {
  name: string;
  id: number;
  url: string;
  types: PokemonType[];
};

type Request = {
  id: number;
  types: PokemonType[];
};

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  useEffect(() => {
    async function loadData() {
      const response = await api.get('/pokemon');
      const { results } = response.data;
      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types } = await getMoreInfo(pokemon.url);
          return { name: pokemon.name, id, types };
        })
      );
      setPokemons(payloadPokemons);
    }
    loadData();
  }, []);

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url);
    const { id, types } = response.data;
    return { id, types };
  }
  return (
    <S.Container>
      {pokemons.map((item) => (
        <Text>{item.name}</Text>
      ))}
    </S.Container>
  );
}