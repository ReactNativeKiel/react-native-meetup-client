import React, { Component } from 'react';
import {
  ActivityIndicatorIOS,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Headline extends Component {
  render() {
    const {
      style = {},
      text,
    } = this.props;

    if (!text) {
      return (
        <ActivityIndicatorIOS
          style={styles.headline}
          size="large"
        />
      );
    }

    return (
      <View style={[styles.headline, style]}>
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
