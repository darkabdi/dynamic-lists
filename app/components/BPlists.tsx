import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, Text , Touchable, TouchableOpacity, View , Button } from 'react-native';
import { ItemContainer, ItemName } from '../styles';
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
     

     <View>
         <Button
         title='Delete'
         onPress={() => handleDelete(item._id)}
         />
      <ItemName
      >{item.content}</ItemName>
    </View>
 
  )}

  return (
    <ItemContainer>
      <FlatList
      data={bulletPoints}
      renderItem={renderItem}
      />
       <Addinput onAdd={refreshBP} />
    </ItemContainer>
  )
}



export default BPLists