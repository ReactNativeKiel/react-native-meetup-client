import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Meetup from './Meetup';
import ActivityIndicator from './ActivityIndicator';

export default class MeetupList extends Component {
  render() {
    const {
      meetups,
      navigator,
    } = this.props;

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => true,
    });
    const dataSource = ds.cloneWithRows(meetups);

    return (
      <View style={styles.container}>
        {Boolean(meetups.length) && <ListView
          dataSource={dataSource}
          renderRow={data => <Meetup {...data} navigator={navigator} />}
        />}

        {Boolean(!meetups.length) && <ActivityIndicator
          style={styles.container}
          size="large"
        />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});
