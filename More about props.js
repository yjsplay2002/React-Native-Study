import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';

class Greeting extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{alignItems: 'left-center'}}>
        <Text>Hello {this.props.name} & {this.props.other}!</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name='Rexxar' other='babo' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Greeting name='Test' />
      </View>
    );
  }
}
