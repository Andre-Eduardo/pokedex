import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1 ;
background-color:${({ theme }) => theme.colors.backgroundCard.water} ;
 `;

export const Content = styled.View`
height:70% ;
align-items: center ;
justify-content:center ;
 
  `;

export const WrapperAnimation = styled.View`
width:200px;
height:300px;
background-color:${({ theme }) => theme.colors.boxType.water};
border-radius: 100px ;
justify-content: center; ;
align-items: center ;
transform:rotate(30deg); ;

`;
export const WrapperImage = styled.View`
transform:rotate(-30deg)
`;

export const Footer = styled.View`
height:30% ;
background-color:${({ theme }) => theme.colors.background};
border-top-right-radius:20px ;
border-top-left-radius:20px ;
justify-content: center ;
align-items: center ;
padding:20px ;
   `;

export const Title = styled.Text`
font-size: 40px ;
color:${({ theme }) => theme.colors.background};
margin-top:20px ;
`;
export const SubTitle = styled.Text`
font-size: 16px ;
margin-top: 16px;
color:${({ theme }) => theme.colors.background};
`;