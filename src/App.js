import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Headline from './components/Headline';
import MeetupList from './components/MeetupList';
import { meetupName } from './services/meetup';

const meetups = [{
  name: 'My fancy Meetup',
  photo: 'http://photos2.meetupstatic.com/photos/event/5/b/c/3/highres_450383491.jpeg',
  rsvpLimit: 25,
  rsvps: 24,
  time: 1464195600000,
  venueName: 'My fancy location',
}, {
  name: 'Another great Meetup',
  photo: 'http://photos4.meetupstatic.com/photos/event/5/c/7/d/highres_450383677.jpeg',
  rsvpLimit: 50,
  rsvps: 10,
  time: 1464470131656,
  venueName: 'Another great location',
}, {
  name: 'Let\'s meet again!',
  photo: 'http://photos3.meetupstatic.com/photos/event/5/c/8/3/highres_450383683.jpeg',
  rsvpLimit: 10,
  rsvps: 8,
  time: 1462572130000,
  venueName: 'Another great location',
}];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    meetupName().then(name => {
      this.setState({
        name,
      });
    });
  }

  render() {
    const {
      navigator,
    } = this.props;

    const {
      name,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Headline text={name || 'Loading Name'} />
          <MeetupList navigator={navigator} meetups={meetups} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  top: {
    alignSelf: 'flex-start',
    flex: 1,
  }
});
