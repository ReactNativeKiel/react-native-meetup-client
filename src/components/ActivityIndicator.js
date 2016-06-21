import React, { Component } from 'react';
import {
  ActivityIndicatorIOS,
  Platform,
  ProgressBarAndroid,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TimerMixin from 'react-timer-mixin';

const ActivityIndicator = React.createClass({
  mixins: [TimerMixin],

  getInitialState: function() {
    return {
      progress: 0
    };
  },

  componentDidMount: function() {
    this.setInterval(
      () => {
        var progress = (this.state.progress + 0.02) % 1;
        this.setState({
          progress: progress
        });
      }, 50
    );
  },

  render() {
    const {
      style,
    } = this.props;

    const {
      progress,
    } = this.state;

    if (Platform.OS === 'ios') {
      return (
        <ActivityIndicatorIOS style={style} size="large" />
      );
    } else {
      return (
        <ProgressBarAndroid progress={progress} style={style} styleAttr="Large" />
      );
    }
  }
});

export default ActivityIndicator;
