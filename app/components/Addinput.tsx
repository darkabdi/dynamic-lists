import React, { useState } from 'react'
import { View , TextInput , TouchableOpacity, Text, Button } from 'react-native'
import {ComponentContainer, InputContainer} from '../styles'
import { AddBulletpoint } from './Methods'

interface AddInputProps {
  onAdd : () => void
}



const Addinput = ({onAdd}: AddInputProps) => {
const [value, setValue] = useState<string>('')
const handleAdd = async ()=> {
if (!value.trim()) return

await AddBulletpoint({content : value , urgent: false})
setValue('')
onAdd()
  
}
   
  return (
 <ComponentContainer>

      <InputContainer>
        <TextInput placeholder="Add Task..." 
        value={value}
        onChangeText={setValue}
        />
      </InputContainer>
      <Button
      title='New Point'
      onPress={handleAdd}
      />
    </ComponentContainer>
  )
}
export default Addinput