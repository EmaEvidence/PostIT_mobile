import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Header from './Header';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  TextInput,
  Button
} from 'react-native';

export default class SignUp extends Component {
  static navigationOptions = {
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
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.pageTitle}>
            Sign Up
          </Text>
          <View style={styles.formContainer}>
            <ScrollView style={{ width: '100%',}}>
              <View style={styles.formHolder}>
                <TextInput
                  placeholder="Firstname Lastname"
                  style={styles.textInput}
                />
                <TextInput
                  placeholder="Username"
                  style={styles.textInput}
                />
                <TextInput
                  placeholder="Email"
                  style={styles.textInput}
                />
                <TextInput
                  placeholder="Phone Number"
                  style={styles.textInput}
                />
                <TextInput
                  placeholder="Password"
                  style={styles.textInput}
                />
                <TextInput
                  placeholder="Confirm Password"
                  style={styles.textInput}
                />
              </View>
              <View style={styles.buttonHolder}>
                <Button
                  title="Sign Up"
                  onPress={() => { console.log(1234); } }
                />
                <Button
                  title="Sign In"
                  onPress={() => { this.props.navigation.navigate('Home'); } }
                />
              </View>
              <View style={styles.googleBtn}>
                <Button
                  title="Continue with Google"
                  onPress={() => { console.log(1234); } }
                />
                <Text style={styles.pageTitle}>
                  forgot password
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    overflow: 'scroll',
    margin: 0,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#8AC6C6',
    marginBottom: 10,
    fontSize: 30,
    backgroundColor: '#EBEBEB',
    width: 260,
    marginTop: 10,
    fontFamily: 'Open Sans',
  },
  sidenav: {
    height: 40,
    width: 40,
    backgroundColor: '#EBEBEB',
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#8AC6C6',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  section: {
    flexDirection: 'column',
    backgroundColor: '#EBEBEB',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flexDirection: 'column',
    backgroundColor: '#8AC6C6',
    width: '80%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    backgroundColor: '#8AC6C6',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 100,
    color: '#EBEBEB',
    width: 250,
    padding: 5,
    marginBottom: 20,
  },
  textInput: {
    width: '88%',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: '#EBEBEB',
  },
  buttonHolder: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "flex-start",
    width: '95%',
    margin: 10,
  },
  formHolder: {
    marginTop: '5%',
  },
  googleBtn: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#EBEBEB',
    color: '#8AC6C6',

  }
});
