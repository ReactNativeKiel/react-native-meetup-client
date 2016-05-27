import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class MeetupList extends Component {
  render() {
    const {
      meetups,
    } = this.props;

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => true,
    });
    const dataSource = ds.cloneWithRows(meetups);

    return (
      <View style={styles.container}>
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }

  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <Text>{rowData}</Text>
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
