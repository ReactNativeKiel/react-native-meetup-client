import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Headline from './components/Headline';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Headline text="Hello World" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  top: {
    alignSelf: 'flex-start',
  }
});
