import styled, { css } from "styled-components/native";



export const Container = styled.View`
flex: 1 ;
background:${({ theme }) => theme.colors.primary};
justify-content: center ;
align-items: center ;
 `;

export const Title = styled.Text`
color:${({ theme }) => theme.colors.secondary};
 `;