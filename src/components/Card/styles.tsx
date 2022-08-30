import styled from 'styled-components/native';
type PokemonType = {
     type: 'fire' | 'water' | 'poison' | 'normal' | 'bug' | 'flying' | 'eletric' | 'ground'

}

export const PokemonCard = styled.TouchableOpacity<PokemonType>`
border-radius:10px ;
margin-top:30px ;
flex-direction:row ;
padding:20px ;
background-color:${({ theme, type }) => theme.colors.backgroundCard[type]};
 `;
export const LeftSid = styled.View`
width:50%;
position: relative; 
  `;
export const PokemonId = styled.Text`
font-weight:bold ;
font-size:12px ;
line-height:14px ;
color: ${({ theme }) => theme.colors.light_text};
   `;
export const PokemonName = styled.Text`
font-weight:bold ;
font-size:25px ;
line-height:31px ;
text-transform:capitalize ;
color: ${({ theme }) => theme.colors.light_text};
    `;
export const ImageCardDetailLeftSide = styled.Image`
position:absolute ;
width:74px ;
height:32px ;
left:90px ;
top:-10px
     `;
export const PokemonContentType = styled.View`
 flex-direction: row ;
      `;
export const PokemonType = styled.View<PokemonType>`
background-color:${({ theme, type }) => theme.colors.boxType[type]};
padding:5px ;
width:65px ;
height:25px;
border-radius:3px ;
margin-left:5px ;
margin-top:5px ;
justify-content:center ;
align-items: center ;
            `;
export const PokemonTypeIcon = styled.View`
     flex: 1 ;
      `;
export const PokemonTypeText = styled.Text`
font-weight:500 ;
font-size:12px ;
line-height:14px ;
color:${({ theme }) => theme.colors.light_text} ;
text-transform:capitalize ;
      `;

export const RightSide = styled.View`
flex: 1 ;
 `;