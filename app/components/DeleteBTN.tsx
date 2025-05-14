import React from 'react'
import { Touchable, TouchableOpacity , Text } from 'react-native'
import { deleteBP } from './Methods'



const DeleteBTN = () => {
    const handleDelete = async ()=>{
try {
  await deleteBP
  console.log('deleted')
} catch (error) {
  console.log('error:',error)
}

}
  return (
   <TouchableOpacity>
    <Text>Delete</Text>
   </TouchableOpacity>
  )
}

export default DeleteBTN


