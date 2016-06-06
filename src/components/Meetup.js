import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
const {width} = Dimensions.get('window');
import MeetupDetail from './MeetupDetail';

export default class Meetup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonMovement: new Animated.Value(0),
      expanded: false,
    };
  }

  calculateColor(ratio) {
    if (ratio > 0.9) {
      return '#FF0000';
    }

    if (ratio > 0.7) {
      return '#F0F000';
    }

    return '#00FF00';
  }

  render() {
    const {
      name,
      navigator,
      photo,
      rsvpLimit,
      rsvps,
      time,
      venueName,
    } = this.props;

    const {
      buttonMovement,
      expanded,
    } = this.state;

    const date = new Date(time);

    return (
      <TouchableHighlight
        activeOpacity={0.5}
        onPress={() => {
          if (this.state.expanded) {
            this.setState({
              expanded: false,
            });
            Animated.timing(buttonMovement, {
              duration: 500,
              easing: Easing.inOut(Easing.quad),
              toValue: 0,
            }).start();
          } else {
            requestAnimationFrame(() => {
              navigator.push({...this.props, component: MeetupDetail,});
            });
          }
        }}
        onLongPress={() => {
          Animated.timing(buttonMovement, {
            duration: 1000,
            easing: Easing.inOut(Easing.quad),
            toValue: -100,
          }).start();
          this.setState({
            expanded: true,
          });
        }}
        underlayColor="#f5f5f5">
        <Animated.View style={[styles.container, { transform: [{ translateX: buttonMovement }]}]}>
          <Image style={styles.image} source={{ uri: photo }} />
          <View style={styles.infos}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.details}>
              <Text style={[styles.rsvp, {
                color: this.calculateColor(rsvps / rsvpLimit),
              }]}>{rsvps} / {rsvpLimit}</Text>
              <View style={styles.placeAndTime}>
                <Text style={styles.smallText}>{date.getDay()}.{date.getMonth()}.{date.getFullYear()}</Text>
                <Text style={styles.smallText}>{venueName}</Text>
              </View>
            </View>
          </View>
        </Animated.View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: width,
  },
  details: {
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    height: 100,
    marginRight: 20,
    resizeMode: 'contain',
  },
  infos: {
    flex: 2,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  placeAndTime: {
    flex: 3,
  },
  rsvp: {
    flex: 1,
  },
  smallText: {
    fontSize: 13,
    textAlign: 'center',
  },
});
