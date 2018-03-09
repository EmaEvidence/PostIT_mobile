import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Header from './Header';
import RightButton from './RightButton';
import LeftButton from './LeftButton';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  TextInput,
  Button,
  Picker,
  Animated,
  Easing,
  Alert
} from 'react-native';

export default class WelcomeScreen extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
    imageSize: new Animated.Value(0),
    text: 'Welcome to Post IT',
  }
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
          title="bbb"
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
  
  componentDidMount = () => {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                  // Starts the animation
    Animated.timing(this.state.imageSize, {
      toValue: 400,
      easing: Easing.back(),
      duration: 4000,
    }).start();
    setTimeout(() => {
      // this.setState({
      //   text: 'Emmanuel',
      // })
      this.props.navigation.navigate('SignIn');
    }, 10000);
  }

  render() {
    let { fadeAnim, imageSize, text } = this.state;
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 100,      // Bind opacity to animated value
        }}
      >
        <Image
          style={{
            width: '50%',
            height: '50%',
            resizeMode: Image.resizeMode.contain,
          }}
          source={{ uri: 'http://res.cloudinary.com/damc3mj5u/image/upload/v1520541663/BabyTuxAlpha_vp4ruc.png' }}
        />
        <Text style={{ fontSize: 30, }}>{ text }</Text>
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
