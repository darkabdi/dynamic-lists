import { FlatList , View} from "react-native";
import styled from 'styled-components/native'


export const ItemContainer = styled.View`
 
  border: solid blue 1px;
  border-radius: 10px;
  padding: 20px;
  margin: 5px;
  border: solid 1px gray;
  

`
export const ItemName = styled.Text`
  font-size: 24px;
  padding: 10px;
  margin: 5px;
  border: solid 1px black;
  border-radius: 25px;

`;

export const ComponentContainer = styled.View`

flex: 1;
justify-content:flex-end ;
height: auto;
`
export const InputContainer = styled.View`
border-radius: 10px;
border: solid 1px black;
margin: 5px;

`
export const RenderedItemContainer = styled.View `

display: flex;
flex-direction: row;
justify-content: space-between;
`

export default {InputContainer , ComponentContainer , ItemName , ItemContainer 
  , RenderedItemContainer
}