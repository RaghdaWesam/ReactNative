import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCXrdo4bTI9xlgSahxcyfqV6FNgClyWBiI',
      authDomain: 'manager-e34cf.firebaseapp.com',
      databaseURL: 'https://manager-e34cf.firebaseio.com',
      projectId: 'manager-e34cf',
      storageBucket: '',
      messagingSenderId: '650642615648'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
