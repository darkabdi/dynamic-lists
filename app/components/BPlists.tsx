import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, Text , Touchable, TouchableOpacity, View , 
  Button , KeyboardAvoidingView , Platform } from 'react-native';
import { ItemContainer, ItemName, RenderedItemContainer } from '../styles';
import Addinput from './Addinput';
import { deleteBP, fetchBulletPoints,  } from './Methods';



interface BulletPoint {
    content : string,
    date : object
    urgent : boolean
    _id: string
}



 function BPLists(){
  const [bulletPoints, setBulletPoints] = useState<BulletPoint[]>([])

  const refreshBP = async ()=>{
    const data = await fetchBulletPoints()
    setBulletPoints(data)
  }

  useEffect(()=>{
    refreshBP()

  }, [])
  
  const handleDelete = async (_id:string)=>{
      await deleteBP(_id)
      refreshBP()
     
  }

  const renderItem = ({ item } : {item : BulletPoint})=>{
    return(
     

     <RenderedItemContainer >
         <Button
         title='Delete'
         onPress={() => handleDelete(item._id)}
         />
      <ItemName
      >{item.content}</ItemName>
    </RenderedItemContainer>
 
  )}

  return (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80} // adjust if header exists
  >
    <View style={{flex:1}} >
    <ItemContainer style={{ flex: 1 }} >
      <FlatList
      data={bulletPoints}
      renderItem={renderItem}
      />
    </ItemContainer>
    
    <Addinput onAdd={refreshBP}/>
    </View>
   </KeyboardAvoidingView>
  )
}



export default BPLists