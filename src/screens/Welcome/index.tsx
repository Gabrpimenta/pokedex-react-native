import * as S from './styles';
import AnimatedLottieView from 'lottie-react-native';
import pokemonAnimation from './pokemon.json';

export function Welcome() {
  return (
    <S.Container>
      <S.Content>
        <S.WrapperAnimation>
          <S.WrapperImage>
            <AnimatedLottieView
              style={{ width: 200 }}
              source={pokemonAnimation}
              autoPlay
              loop
            />
          </S.WrapperImage>
        </S.WrapperAnimation>
        <S.Title>"squirtle squirtle"</S.Title>
        <S.Title>(Bem Vindo)</S.Title>
        <S.Subtitle> - Squirtle</S.Subtitle>
      </S.Content>
      <S.Footer></S.Footer>
    </S.Container>
  );
}
