import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import Meetup from './Meetup';
import MeetupDetail from './MeetupDetail';

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
        <ListView
          dataSource={dataSource}
          renderRow={data => (
            <TouchableHighlight 
              activeOpacity={0.5}
              onPress={() => 
                requestAnimationFrame(() => {
                  navigator.push({...data, component: MeetupDetail,});  
                })
              }
              underlayColor="#f5f5f5">
              <View>
                <Meetup {...data} />
              </View>
            </TouchableHighlight>
          )}
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
