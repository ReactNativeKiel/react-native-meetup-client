import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ListView,
  StyleSheet,
  View,
} from 'react-native';
import Lightbox from 'react-native-lightbox';

import Headline from './Headline';
import BackButton from './BackButton';

export default class MeetupDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      photos,
      name,
      navigator,
    } = this.props;

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => true,
    });
    const dataSource = ds.cloneWithRows(photos);

    return (
      <View style={styles.container}>
        <View stlye={styles.headline}>
          <Headline text={name} />
        </View>

        <ListView
          dataSource={dataSource}
          renderRow={imageUrl => (
            <Lightbox>
              <Image
                style={{ height: 300 }}
                source={{ uri: imageUrl }}
              />
            </Lightbox>
          )}
        />

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
