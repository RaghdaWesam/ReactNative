import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBqFBd8-mGQhaoMfVsBMFJXBx4ySwsKlo8',
      authDomain: 'authentication-2fe34.firebaseapp.com',
      databaseURL: 'https://authentication-2fe34.firebaseio.com',
      projectId: 'authentication-2fe34',
      storageBucket: 'authentication-2fe34.appspot.com',
      messagingSenderId: '889453126057'
    });

    // to know if the user is logged in at anytime or not
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {

      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => { firebase.auth().signOut(); }}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );

      case false:
        return <LoginForm />;

      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
