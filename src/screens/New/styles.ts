import { SafeAreaView } from 'react-native-safe-area-context';
import styled, {css} from "styled-components/native";

// export type btnDietaStyleProps = "PRIMARY" | "SECONDARY" | "DEFAULT";

// type Props = {
//   type: btnDietaStyleProps;
// }


export const Container = styled(SafeAreaView)`
  flex: 1;
  /* height: 100%; */
`;

export const Context = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.BASE.GRAY[500]};  
  `;


export const Form = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BASE.GRAY[700]};  
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 0 24px;
  padding-top: 16px;
`;

export const DivLinha = styled.View`
  margin-top: 24px;
`;
export const DivLinhaMetade = styled.View`
  width: 48%;
`;

export const DivLinha2Colunas = styled.View`
  margin-top: 24px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const DivLinha2ColunasSemMargem = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Label = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    color: ${theme.COLORS.BASE.GRAY[200]};
  `};  
  
`;

export const Input = styled.TextInput`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    color: ${theme.COLORS.BASE.GRAY[100]};
  `};  
  border: 1px solid;
  width: 100%;
  height: 48px;
  border-radius: 6px;
  padding: 14px;
  border-color: ${({theme}) => theme.COLORS.BASE.GRAY[500]};
  margin-top: 4px;
`;

export const BtnDieta = styled.TouchableOpacity<Props>`
  flex-direction: row;
  /* width: 160px; */
  width: 100%;
  height: 50px;
  background-color: ${({theme, type}) => 
    type === "PRIMARY" ? theme.COLORS.BRAND.GREEN.LIGHT : 
    type === 'SECONDARY' ? theme.COLORS.BRAND.RED.LIGHT : 
    theme.COLORS.BASE.GRAY[600]};  
  align-items: center;
  justify-content: center;
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    color: ${theme.COLORS.BASE.GRAY[100]};
  `};  
`;


export const CirculoStatus = styled.View<Props>`
  height: 8px;
  width: 8px;
  background-color: ${({theme, type}) =>  type === "PRIMARY" ? theme.COLORS.BRAND.GREEN.DARK : theme.COLORS.BRAND.RED.DARK };
  margin-right: 8px;
  border-radius: 8px;
`;

export const BtnAddRefeicao = styled.TouchableOpacity`
  height: 50px;
  width: 327px;
  background-color: ${({theme}) => theme.COLORS.BASE.GRAY[200]};
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TextBtnRefeicao = styled.Text`
   ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    color: ${theme.COLORS.BASE.WHITE};
  `};  
  align-items: center;
  text-align: center;
`
export const DivDados = styled.View`
  border-radius: 25px;
  margin-top: 0px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY[700] };
`;

export const InputName = styled.TextInput`
  border-radius: 6px;
  padding: 16px;
  border: solid 0.5px;
  margin: 0px;
  width: 100%; 
  font-size: ${({ theme })=>theme.FONT_SIZE.BODY_S}px;    
`;

export const InputDescription = styled.TextInput`
  border-radius: 6px;
  padding: 16px;
  border: solid 0.5px;
  margin: 0px;
  width: 100%; 
  height: 120px;
  font-size: ${({ theme })=>theme.FONT_SIZE.BODY_S}px;  
`;

export const DivColuna = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0px;
`;

export type btnDietaStyleProps = "PRIMARY" | "SECONDARY" | "DEFAULT";

type Props = {
  type: btnDietaStyleProps;
}

export const BtnDietaSim = styled.TouchableOpacity<Props>`
  width: 159px;
  height: 50px;
  
  background-color: ${({theme, type}) => 
    type === "PRIMARY" ? theme.COLORS.BASE.GRAY[600] : theme.COLORS.BASE.WHITE}; 

  top: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BtnDietaNao = styled.TouchableOpacity<Props>`
  width: 159px;
  height: 50px;

  background-color: ${({theme, type}) => 
    type === 'SECUNDARY' ? theme.COLORS.BRAND.RED.LIGHT : theme.COLORS.BASE.WHITE}; 

  top: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Status = styled.Image`
  width: 8px;
  height: 8px;
`;
