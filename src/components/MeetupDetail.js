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

const meetupPhotos = ['http://photos1.meetupstatic.com/photos/event/5/b/b/1/600_450383473.jpeg','http://photos2.meetupstatic.com/photos/event/5/c/7/d/600_450383677.jpeg','http://photos3.meetupstatic.com/photos/event/5/c/8/3/600_450383683.jpeg','http://photos2.meetupstatic.com/photos/event/5/c/d/c/600_450383772.jpeg'];

export default class MeetupDetail extends Component {
  constructor(props) {
    super(props);
    this.state = this.getNewState(meetupPhotos);
  }

  getNewState(meetupPhotos = []) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    return {
      dataSource: ds.cloneWithRows(meetupPhotos),
    };
  }

  render() {
    const {
      dataSource,
    } = this.state;

    const {
      name,
      navigator,
    } = this.props;

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
