import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BackButton extends Component {
  render() {
    const {
      navigator,
    } = this.props;

    return (
      <View style={styles.backButton}>
        <Text style={styles.text}>&laquo;&laquo; Back</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});
