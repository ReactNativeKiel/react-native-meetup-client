import React, { Component } from 'react';
import {
  Dimensions,
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
        <Text style={styles.text}>&laquo; Back</Text>
      </View>
    );
  }
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    backgroundColor: '#414db4',
    bottom: 0,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    width: width,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
