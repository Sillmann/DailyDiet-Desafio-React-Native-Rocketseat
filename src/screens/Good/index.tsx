import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';

import goodPng from '@assets/good.png';

import { Container, 
         DivTextos, 
         DivTexto1, 
         DivTexto2, 
         ImgGood } from './styles';

export function Good() {

  
  const navigation = useNavigation();

  function handleHome(){
    navigation.navigate('home');
  }

  return (
    <Container>
      
      <DivTextos>

      <DivTexto1>
        Continue assim!
      </DivTexto1>

      <DivTexto2>
        Você continua dentro da dieta. Muito bem!
      </DivTexto2>

      </DivTextos>

      <ImgGood source={goodPng} />      

      <Button
        oTexto="Ir para a página inicial"
        onPress={handleHome}
      />

    </Container>
  );
}  
