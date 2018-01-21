import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state =
  { email: '', password: '', error: '' };

  onButtonPress() {
    console.log('login press!');
    const { email, password } = this.state;

    this.setState({ error: '' });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        console.log('bad req 1');
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            console.log('bad req 2');
            this.setState({ error: 'Authentication Failed.' });
          });
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={() => { this.onButtonPress(); }}>
            Log in
          </Button>
        </CardSection>
      </Card>

    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center', // center text on screen
    color: 'red'
  }
};

export default LoginForm;

