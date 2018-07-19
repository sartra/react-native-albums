import React from 'react';
import { Text, View, Image } from 'react-native'; 
import Card from './Card'; 
import CardSection from './CardSection'; 
import Button from './Button'; 


const AlbumDetail = ({ album }) => {

  const { title, artist, thumbnail_image, image } = album; 
  const { headerContent, thumbnail, thumbnailContainer, headerTitle, albumCover } = styles; 

  return (

    <Card>

      <CardSection>
        <View style={ thumbnailContainer }>
          <Image 
            source={{ uri: thumbnail_image }} 
            style={thumbnail}
            />
        </View>
        <View style={headerContent}>
          <Text style={headerTitle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

    <CardSection>
      <Image source={{ uri: image }} style={ albumCover } /> 
    </CardSection>

    <CardSection>
      <Button />
    </CardSection> 
    
    </Card> 
  )
}

const styles = {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }, 
  headerTitle: {
    fontSize: 18
  },
  thumbnail: {
    height: 50,
    width: 50
  }, 
  thumbnailContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumCover: {
    height: 300,
    flex: 1,
    width: null 
  }
}

export default AlbumDetail; 