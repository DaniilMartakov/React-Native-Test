import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

export default function Loading() {
  return (
    <View style={{flex: 1 , justifyContent: 'center' , alignItems:'center'}}>
                <ActivityIndicator size='small' />
                <Text style={{ marginTop:15 }}>Loading</Text>
                </View>
  )
}
