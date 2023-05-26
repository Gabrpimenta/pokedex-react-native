import { useEffect, useState } from 'react';
import * as S from './styles';
import api from '../../services/api';
import { FlatList } from 'react-native';
import Card, { Pokemon, PokemonType } from '../../components/Card';
import pokeballHeader from '../../assets/img/pokeball.png';

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
      <FlatList
        ListHeaderComponent={
          <>
            <S.Header source={pokeballHeader} />
            <S.Title>Pokédex</S.Title>
          </>
        }
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        renderItem={({ item: pokemon }) => <Card data={pokemon} />}
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id.toString()}
      />
    </S.Container>
  );
}
