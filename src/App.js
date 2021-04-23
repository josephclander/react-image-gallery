import React, { Component } from 'react';

import Search from './Components/Search';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import axios from 'axios';
import apiKey from './config';

const searchFlickr = (query = 'cats') => {
  axios
    .get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=24&page=1&format=json&nojsoncallback=1`
    )
    .then((data) => console.log(data.data.photos.photo))
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
    });
};
searchFlickr();

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Search />
        <Nav />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
