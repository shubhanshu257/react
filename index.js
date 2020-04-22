/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import { Tester, TestHookStore } from 'cavy';
import App from './Home';
import ExampleSpec from './specs/exampleSpec';

const testHookStore = new TestHookStore();

class AppWrapper extends Component {
  render() {
    return (
      <Tester specs={[ExampleSpec]} store={testHookStore} >
        <App/>
      </Tester>
    );
  }
}
AppRegistry.registerComponent(appName, () => AppWrapper);


