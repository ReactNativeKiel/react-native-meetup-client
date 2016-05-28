import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Headline extends Component {
  render() {
    const {
      text,
    } = this.props;

    return (
      <View style={styles.headline}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headline: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});
