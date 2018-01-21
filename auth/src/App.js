import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBqFBd8-mGQhaoMfVsBMFJXBx4ySwsKlo8',
      authDomain: 'authentication-2fe34.firebaseapp.com',
      databaseURL: 'https://authentication-2fe34.firebaseio.com',
      projectId: 'authentication-2fe34',
      storageBucket: 'authentication-2fe34.appspot.com',
      messagingSenderId: '889453126057'
    });
  }
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
