import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  View } from 'react-native'
import  styled  from 'styled-components/native'
import Loading from '../components/Loading'

const PostImage = styled.Image`
border-radius: 10px;
width: 100%;
height: 250px;
margin-bottom: 20px;
`

const PostText = styled.Text`
font-size:18px;
line-height:24px;
`
export default function FullPost({ route , navigation }) {
    const [data , setData] = useState()
    const [isLoading , setIsLoading] = useState(true)
    const { id , title } = route.params


    useEffect(() => {
        navigation.setOptions({
            title
        })
        axios.get('https://65aa3281081bd82e1d96509f.mockapi.io/data/' + id)
    .then(({data}) => {
        setData(data)
    })
    .catch(err=> {
        console.log(err);
        alert('Ошибка')
    }).finally(()=> {
      setIsLoading(false)
    })
    }, [])

    if( isLoading ) {
        return  <Loading/>
      }
    
  return (
    <View style={{padding: 20}}>
        <PostImage  source={{ uri: data?.imageUrl}}/>
        <PostText>{data.text} </PostText>
    </View>
  )
}
