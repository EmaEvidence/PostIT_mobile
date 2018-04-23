import React from 'react';
import {
  StyleSheet,
  Button,
  AsyncStorage,
} from 'react-native';

/**
 *
 */
const LogOut = () => {
  return (
    <Button
      color="#8AC6C6"
      title="Log"
      onPress={() => {
        AsyncStorage.removeItem('token', (err, result) => {
          if (result) {
            this.setState({
              token: result
            });
          }
        });
      }}
    />
  );
}

const styles = StyleSheet.create({
  sidenav: {
    height: 40,
    width: 40,
    backgroundColor: '#EBEBEB',
    margin: 10,
  },
});

export default LogOut;
