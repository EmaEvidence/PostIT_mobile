import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class LeftButton extends Component {
  render() {
    return (
      <Button
        color="#8AC6C6"
      >
        <View style={styles.sidenav}>
        </View>
      </Button>
  );
  }
}

const styles = StyleSheet.create({
  sidenav: {
    height: 40,
    width: 40,
    backgroundColor: '#EBEBEB',
    margin: 10,
  },
});
