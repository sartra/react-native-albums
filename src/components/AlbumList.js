import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import axios from 'axios'; 
import AlbumDetail from './AlbumDetail'; 

class AlbumList extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     albums: []
  //   }
  // }

  state = {
    albums: []
  }

  // for AJAX requests to fetch data - use library Axios (npm install --save axios )
  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')   // returns a promise
      .then(res => this.setState({ albums: res.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album}/>
    );
  }

  render(){
    console.log('state', this.state)
    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
};

export default AlbumList; 


