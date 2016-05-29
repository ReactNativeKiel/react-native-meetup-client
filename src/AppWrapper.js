import React, { Component } from 'react';
import {
  Navigator,
} from 'react-native';
import App from './App';

export default class AppWrapper extends Component {
  render() {
    return (
      <Navigator
        configureScene={() => Navigator.SceneConfigs.HorizontalSwipeJump}
        initialRoute={{
          component: App,
        }}
        renderScene={(route, navigator) => (<route.component {...route} navigator={navigator} />)}
      />
    );
  }
}
