import React, { Component } from 'react';
import {
  Dimensions,
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
        <View stlye={styles.headline}>
          <Headline text={name} />
        </View>
        <BackButton navigator={navigator} />
      </View>
    );
  }
}

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    height,
    paddingTop: 20,
    position: 'relative',
  },
  headline: {
    alignSelf: 'flex-start',
  }
});
