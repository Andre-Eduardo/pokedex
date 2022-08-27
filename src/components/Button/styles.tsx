import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
width: 100% ;
height: 50px ;
background-color: ${({ theme }) => theme.colors.backgroundCard.water} ;
justify-content:center ;
align-items: center ;
border-radius: 12px ;
 `;

export const Title = styled.Text`
 font-size:20px ;
 color: ${({ theme }) => theme.colors.background};
 `;