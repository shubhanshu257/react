import React, {Component} from 'react';
import {View, Text,TextInput,StyleSheet,Button,Alert} from 'react-native';
import { hook, wrap } from 'cavy';

class Home extends React.Component {
    
    constructor(){
      super();
      this.state = {text: 'test'};  
      
     
    }
    render(){
        const {generateTestHook }=this.props;
        const TestableTextInput = wrap(TextInput);
        return(
            <View>
              <TestableTextInput 
                ref={generateTestHook('Home.TextInput', (c) => this.textInput = c)}
                onChangeText={(text) => {
                  this.setState({
                    text: text
                  })
                }}
                value={this.state.text}
              />
              <Button
                ref ={generateTestHook('Home.Button')}
                title="Press me"
                onPress={() => Alert.alert(this.state.text)}
              />
            </View>
        );
    }
  }

  const TestableScene =hook(Home);
  export default TestableScene;