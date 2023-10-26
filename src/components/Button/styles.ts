import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';


export type ButtonTypeProps = 'EDIT' | 'TRASH';

type Props = {
  type: ButtonTypeProps;
}

export const Container = styled(TouchableOpacity)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY[200]};

  border-radius: 6px;

  align-items: center;
  justify-content: center;

  width: 327px;
`
export const ButtonTexto = styled.Text`
  color: ${({ theme })=>theme.COLORS.BASE.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`
export const Img = styled.Image<Props>`
  width : 18px;
  height: 18px;  
  color: ${({ theme })=>theme.COLORS.BASE.WHITE};

`;