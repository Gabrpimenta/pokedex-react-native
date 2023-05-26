import * as S from './styles';
import AnimatedLottieView from 'lottie-react-native';
import pokemonAnimation from './pokemon.json';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Welcome() {
  const { navigate } = useNavigation();
  const handleNavigation = () => {
    navigate('Home');
  };
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
      <S.Footer>
        <Button title='Pokédex' onPress={handleNavigation} />
      </S.Footer>
    </S.Container>
  );
}
