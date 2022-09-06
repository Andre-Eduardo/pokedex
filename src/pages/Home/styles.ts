import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

const windowWidth = Dimensions.get('window').width

export const Container = styled.View`
flex: 1 ;
background:${({ theme }) => theme.colors.background};

 `;

export const Header = styled.ImageBackground`
width:${windowWidth}px ;
height:220px ;
background-color:${({ theme }) => theme.colors.background} ;
margin-left: -20px ;
`;
export const Title = styled.Text`
font-size:32px ;
line-height:38px ;
font-weight:bold ;
color:${({ theme }) => theme.colors.light_text};
`;
