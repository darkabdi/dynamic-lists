import { FlatList , View} from "react-native";
import styled from 'styled-components/native'


export const ItemContainer = styled.View`
height: auto;
  border-radius: 10px;
  padding: 20px;
  margin: 5px;
  border: solid 1px gray;
  height: 95%;
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

export default {InputContainer , ComponentContainer , ItemName , ItemContainer}