import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
