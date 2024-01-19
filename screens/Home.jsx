import { View, FlatList, ActivityIndicator, Text, RefreshControl, TouchableOpacity } from 'react-native';
import Post from '../components/Post';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';

export default function Home({ navigation }) {
  const [items , setItems] = useState()
  const [isLoading , setIsLoading] = useState(true)
  const fetchPost = () => {
    setIsLoading(true)
    axios.get('https://65aa3281081bd82e1d96509f.mockapi.io/data')
    .then(({data}) => {
      setItems(data)
    })
    .catch(err=> {
      console.log(err);
      alert('Ошибка')
    }).finally(()=> {
      setIsLoading(false)
    })
  }
  useEffect(fetchPost, [])
  

  if( isLoading ) {
    return  <Loading/>
  }

  return (
    <View>
      <FlatList  refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPost}/>} data={items} renderItem={({item})=> 
      <TouchableOpacity onPress={()=> navigation.navigate('FullPost' , { id: item.id, title:item.title})}>
      <Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt}/>
      </TouchableOpacity>}/>
    </View>
  );
}

