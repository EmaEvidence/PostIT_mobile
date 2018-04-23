import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Button,
  Animated,
  Easing,
  AsyncStorage
} from 'react-native';

import Header from './Header';
import LogOut from './LogOut';

/**
 *
 */
export default class WelcomeScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Header />,
      headerLeft: (
        <Button
          title="ccc"
          color="#EBEBEB"
        />
      ),
      headerRight: (
        <Button
          title="->"
          color="#EBEBEB"
        />
      ),
      headerStyle: {
        backgroundColor: '#8AC6C6',
        paddingLeft: 10,
        paddingRight: 10,
      },
    };
  };

  state = {
    fadeAnim: new Animated.Value(0),
    imageSize: new Animated.Value(0),
    text: 'Welcome to Post IT',
    token: null,
  }

  componentDidMount = () => {
    AsyncStorage.getItem('token', (err, result) => {
      if (result) {
        this.setState({
          token: result
        });
      }
    });
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
    Animated.timing(this.state.imageSize, {
      toValue: 400,
      easing: Easing.back(),
      duration: 4000,
    }).start();
    setTimeout(() => {
      if (this.state.token) {
        this.props.navigation.navigate('Board');
      } else {
        this.props.navigation.navigate('SignIn');
      }
    }, 10000);
  }

  // showLogOutButton = () => {
  //   if (this.state.token) {
  //     return (
  //       <Button
  //         color="#8AC6C6"
  //         title="Log Out"
  //         onPress={() => {
  //           AsyncStorage.removeItem('token', (err, result) => {
  //             if (result) {
  //               this.setState({
  //                 token: result
  //               });
  //             }
  //           });
  //         }}
  //       />
  //     );
  //   }
  // }


  /**
   *
  */
  render() {
    const { fadeAnim, imageSize, text } = this.state;
    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 100,
        }}
      >
        <Image
          style={{
            width: '50%',
            height: '50%',
            resizeMode: Image.resizeMode.contain,
          }}
          source={{
            uri: 'http://res.cloudinary.com/damc3mj5u/image/upload/v1520541663/BabyTuxAlpha_vp4ruc.png'
          }}
        />
        <Text style={{ fontSize: 30, }}>{ text }</Text>
        <Button
          title="Continue"
          color="#EBEBEB"
          onPress={() => {
            if (this.state.token) {
              this.props.navigation.navigate('Board');
            } else {
              this.props.navigation.navigate('SignIn');
            }
          }}
        />
        {/* {
          this.showLogOutButton()
        } */}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    overflow: 'scroll',
    margin: 0,
  },
  section: {
    flexDirection: 'column',
    backgroundColor: '#EBEBEB',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
