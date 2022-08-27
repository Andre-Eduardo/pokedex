import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1 ;
background-color:${({ theme }) => theme.colors.background} ;
 `;
export const Content = styled.View`
height:70% ;
 
  `;
export const Footer = styled.View`
height:30% ;
background-color:${({ theme }) => theme.colors.backgroundCard.water};
border-top-right-radius:20px ;
border-top-left-radius:20px ;
justify-content: center ;
align-items: center ;
   `;

export const Title = styled.Text`
font-size: 20px ;
color:${({ theme }) => theme.colors.background};
`;
export const SubTitle = styled.Text`]
font-size: 14px ;
margin-top:16px;
color:${({ theme }) => theme.colors.background};
`;