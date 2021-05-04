import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Search from './Components/Search';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';

import axios from 'axios';
import apiKey from './config';

class App extends Component {
  state = {
    catsData: [],
    dogsData: [],
    computersData: [],
    searchData: [],
    isLoading: true,
    title: '',
  };

  searchFlickr = (query) => {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=24&page=1&format=json&nojsoncallback=1`
      )
      .then((data) =>
        this.setState({
          searchData: data.data.photos.photo,
          title: query,
          isLoading: false,
        })
      )
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  };

  componentDidMount() {
    // get 'cats' data
    this.setState({ isLoading: true });
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=cats&per_page=24&page=1&format=json&nojsoncallback=1`
      )
      .then((data) =>
        this.setState({ catsData: data.data.photos.photo, isLoading: false })
      )
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
    // get 'dogs' data
    this.setState({ isLoading: true });
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=dogs&per_page=24&page=1&format=json&nojsoncallback=1`
      )
      .then((data) =>
        this.setState({ dogsData: data.data.photos.photo, isLoading: false })
      )
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
    // get 'computers' data
    this.setState({ isLoading: true });
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=computers&per_page=24&page=1&format=json&nojsoncallback=1`
      )
      .then((data) =>
        this.setState({
          computersData: data.data.photos.photo,
          isLoading: false,
        })
      )
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  }

  // componentDidUpdate(prevProps) {
  //   console.log('componentDidUpdate fired!');
  //   const currentURL = window.location.pathname;
  //   console.log(currentURL);
  //   const regex = /^\/search\//gm;
  //   const isSearch = regex.test(currentURL);
  //   if (isSearch) {
  //     const query = currentURL.slice(8);
  //     console.log(query);
  //   }
  // }

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Search searchHandler={this.searchFlickr} />
          <Nav />
          {this.state.isLoading ? (
            <h3>Loading...</h3>
          ) : (
            <Switch>
              <Route exact path='/' render={() => <Redirect to='/cats' />} />
              <Route
                exact
                path='/cats'
                render={() => (
                  <PhotoContainer
                    data={this.state.catsData}
                    title='Cats'
                    loading={this.state.isLoading}
                  />
                )}
              />
              <Route
                exact
                path='/dogs'
                render={() => (
                  <PhotoContainer
                    data={this.state.dogsData}
                    title='Dogs'
                    loading={this.state.isLoading}
                  />
                )}
              />
              <Route
                exact
                path='/computers'
                render={() => (
                  <PhotoContainer
                    data={this.state.computersData}
                    title='Computers'
                    loading={this.state.isLoading}
                  />
                )}
              />
              <Route
                exact
                path='/search/:query'
                render={() => (
                  <PhotoContainer
                    data={this.state.searchData}
                    title={this.state.title}
                    loading={this.state.isLoading}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
