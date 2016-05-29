import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Headline from './Headline';
import BackButton from './BackButton';

export default class MeetupDetail extends Component {
  render() {
    const {
      name,
      navigator,
    } = this.props;

    return (
      <View style={styles.container}>
        <Headline text={name} />
        <BackButton navigator={navigator} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
});
