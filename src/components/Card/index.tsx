import * as S from './styles';
import dotsImage from '../../assets/img/dots.png';
import pokeball from '../../assets/img/pokeballCard.png';
import { TouchableOpacityProps } from 'react-native';

export type PokemonType = {
  type: {
    name: string;
  };
};

export type Pokemon = {
  name: string;
  id: number;
  url: string;
  types: PokemonType[];
};

type Props = {
  data: Pokemon;
} & TouchableOpacityProps;

export default function Card({ data, ...rest }: Props) {
  return (
    <S.Container type={data.types[0].type.name} {...rest}>
      <S.LeftSide>
        <S.PokemonId>#{data.id}</S.PokemonId>
        <S.PokemonName>{data.name}</S.PokemonName>
        <S.ImageCardDetail source={dotsImage} />
        <S.PokemonContentType>
          {data.types.map((PokemonType) => (
            <S.PokemonType type={PokemonType.type.name}>
              <S.PokemonTypeText key={PokemonType.type.name}>
                {PokemonType.type.name}
              </S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.PokemonContentType>
      </S.LeftSide>
      <S.RightSide>
        <S.PokeballDetail source={pokeball} />
        <S.PokemonImage
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
          }}
        />
      </S.RightSide>
    </S.Container>
  );
}
