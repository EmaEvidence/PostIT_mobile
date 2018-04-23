import React, { Component } from 'react';import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  Button,
  Alert,
  AsyncStorage
} from 'react-native';
import { signUp } from '../actions/authAction';
import Header from './Header';
import Loader from './Loader';

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
    alignItems: 'flex-start',
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

/** */
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

  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
      email: '',
      phone: '',
      confirmPassword: '',
      showLoader: false,
    };
  }

  submit = () => {
    this.setState({
      showLoader: true
    });
    if (this.state.confirmPassword !== this.state.password) {
      Alert.alert('Password does not match');
    } else {
      const {
        name,
        username,
        email,
        phone,
        password
      } = this.state;
      signUp({
        name,
        username,
        email,
        phone,
        password
      })
        .then((response) => {
          this.setState({
            showLoader: false
          });
          if (response.message === 'Welcome') {
            try {
              AsyncStorage.setItem('token', response.token, () => {
                this.props.navigation.navigate('Board');
              });
            } catch (err) {
              Alert.alert(err);
            }
          } else {
            Alert.alert(response);
          }
        })
        .catch((error) => {
          this.setState({
            showLoader: false
          });
          Alert.alert(error);
        });
    }
  }
  /** */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.pageTitle}>
            Sign Up
          </Text>
          <View style={styles.formContainer}>
            <ScrollView style={{ width: '100%', }}>
              <View style={styles.formHolder}>
                <TextInput
                  placeholder="Firstname Lastname"
                  style={styles.textInput}
                  onChangeText={name => this.setState({ name })}
                />
                <TextInput
                  placeholder="Username"
                  style={styles.textInput}
                  onChangeText={username => this.setState({ username })}
                />
                <TextInput
                  placeholder="Email"
                  style={styles.textInput}
                  onChangeText={email => this.setState({ email })}
                />
                <TextInput
                  placeholder="Phone Number"
                  style={styles.textInput}
                  onChangeText={phone => this.setState({ phone })}
                />
                <TextInput
                  placeholder="Password"
                  style={styles.textInput}
                  secureTextEntry
                  onChangeText={password => this.setState({ password })}
                />
                <TextInput
                  placeholder="Confirm Password"
                  style={styles.textInput}
                  secureTextEntry
                  onChangeText={confirmPassword => this.setState({ confirmPassword })}
                />
              </View>
              <View style={styles.buttonHolder}>
                <Button
                  title="Sign Up"
                  onPress={this.submit}
                />
                <Loader showLoader={this.state.showLoader} />
                <Button
                  title="Sign In"
                  onPress={() => { this.props.navigation.navigate('Home'); }}
                />
              </View>
              <View style={styles.googleBtn}>
                <Button
                  title="Continue with Google"
                  onPress={() => { console.log(1234); }}
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
