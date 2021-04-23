import React, { Component } from 'react';

import Search from './Components/Search';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';

import axios from 'axios';
import apiKey from './config';

class App extends Component {
  state = {
    catsData: [],
    dogsData: [],
    computersData: [],
    searchData: [],
  };

  searchFlickr = (query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=24&page=1&format=json&nojsoncallback=1`
      )
      .then((data) => console.log(data.data.photos.photo))
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  };

  componentDidMount() {
    // get 'cats' data
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=cats&per_page=24&page=1&format=json&nojsoncallback=1`
      )
      .then((data) => this.setState({ catsData: data.data.photos.photo }))
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
    // get 'dogs' data
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=dogs&per_page=24&page=1&format=json&nojsoncallback=1`
      )
      .then((data) => this.setState({ dogsData: data.data.photos.photo }))
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
    // get 'computers' data
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=computers&per_page=24&page=1&format=json&nojsoncallback=1`
      )
      .then((data) => this.setState({ computersData: data.data.photos.photo }))
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div className='container'>
        <Search searchHandler={this.searchFlickr} />
        <Nav />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
