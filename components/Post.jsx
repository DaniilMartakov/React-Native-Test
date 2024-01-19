import { styled } from 'styled-components/native';



const PostView = styled.View`
    flex-direction: row;
    padding: 15px;
    border-bottom: 1px grey solid;
    margin-bottom: 1px;
    backgroundColor: white;
`
const PostImage = styled.Image`
    width:60px;
    height: 60px;
    border-radius: 10px;
    margin-right: 12px;
`
const PostTitle = styled.Text`
    font-size:15px;
    font-weight: 700;
`
const PostDetails = styled.View`
    flex: 1;
    justify-content: center;
`
const PostDate = styled.Text`
    font-size: 12px;
    color: rgba(0,0,0,0.4);
    margin-top: 2px;
`

const truncateTitle = (str) => {
    if(str.length >= 50){
        return str.substring(0,50) + '...'
    }
    return str
}

export default function Post({ title , imageUrl , createdAt }) {
  return (
    <PostView>
        <PostImage source={{ uri: imageUrl}}/>
        <PostDetails>
          <PostTitle>{truncateTitle(title)}</PostTitle>
          <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate>
        </PostDetails>
      </PostView>
  )
}
