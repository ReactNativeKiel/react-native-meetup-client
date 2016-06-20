import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Headline from './components/Headline';
import MeetupList from './components/MeetupList';
import { allEvents, meetupName } from './services/meetup';

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
