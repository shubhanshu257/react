import React, {Component} from 'react';
import {View, Text,TextInput,StyleSheet,Button,Alert} from 'react-native';
import { hook } from 'cavy';

class Home extends React.Component {
    constructor(){
      super();
      this.state = {text: ''};  
      
     
    }
    render(){
        const {generateTestHook }=this.props;
        return(
            <View>
            <TextInput 
            ref ={generateTestHook('Home.TextInput',this.textInput)}
            onChangeText= {(text) => this.setState({text})}  
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