import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Settings extends Component {
  render() {
    return (
      <View style=
      {{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
      }}>
        <Text style={{fontSize:50}}>Settings Screen</Text>
      </View>
    );
  }
}
