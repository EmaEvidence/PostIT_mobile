import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MessageBoard from './components/MessageBoard';
import GroupList from './components/GroupList';
import GroupDetails from './components/GroupDetails';
import WelcomeScreen from './components/WelcomeScreen';
import {
  Button
} from 'react-native';

const MainStack = StackNavigator({
  Home: {
    screen: WelcomeScreen,
  },
  SignUp: {
    screen: SignUp,
  },
  Board: {
    screen: MessageBoard,
  },
  SignIn: {
    screen: SignIn,
  }
})

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    groupListModal: {
      screen: GroupList,
    },
    groupDetailModal: {
      screen: GroupDetails,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}
