import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Headline from './components/Headline';
import MeetupList from './components/MeetupList';
import { meetupName as networkMeetupName, allEvents } from './services/meetupNetwork';
import { meetupName as storageMeetupName, setMeetupName } from './services/meetupLocalstorage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    networkMeetupName().then(name => {
      this.setState({
        name,
      });
      setMeetupName(name);
    });

    storageMeetupName().then(name => {
      this.setState({
        name,
      });
    }, err => {
      console.log(err);
    });

    allEvents().then(meetups => {
      this.setState({
        meetups,
      });
    })
  }

  render() {
    const {
      navigator,
    } = this.props;

    const {
      name,
      meetups = [],
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Headline text={name} />
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
