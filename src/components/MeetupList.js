import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Meetup from './Meetup';

export default class MeetupList extends Component {

  constructor(props) {
    super(props);
    this.state = this.getNewState(this.props.meetups);
  }

  getNewState(meetups = []) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.updated !== r2.updated
    });

    return {
      dataSource: ds.cloneWithRows(meetups),
    };
  }

  componentWillUpdate(nextProps) {
    this.setState(this.getNewState(nextProps.meetups));
  }

  render() {
    const {
      dataSource,
    } = this.state;

    return (
      <View style={styles.container}>
        <ListView
          dataSource={dataSource}
          renderRow={data => <Meetup {...data} />}
        />
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
