import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  Button,
  Alert,
  AsyncStorage
} from 'react-native';
import Header from './Header';
import { signIn } from '../actions/authAction';
import Loader from './Loader';

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
    marginBottom: 50,
  },
  textInput: {
    width: '88%',
    margin: 20,
    backgroundColor: '#EBEBEB',
  },
  buttonHolder: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '85%',
    margin: 20,
  },
  formHolder: {
    marginTop: '10%',
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

/**
 *
 */
export default class SignIn extends Component {
  /**
   *
   */
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
      username: '',
      password: '',
      showLoader: false,
      token: '',
    };
  }

  componentDidMount = () => {
    AsyncStorage.getItem('token', (err, result) => {
      if (result) {
        this.setState({
          token: result
        });
      }
    });
  }

  submit = () => {
    this.setState({
      showLoader: true
    });
    const { username, password } = this.state;
    signIn({ username, password })
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

  /**
   *
   */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.pageTitle}>
            Sign In
          </Text>
          <View style={styles.formContainer}>
            <ScrollView style={{ width: '100%' }}>
              <View style={styles.formHolder}>
                <TextInput
                  placeholder="Username"
                  style={styles.textInput}
                  value={this.state.username}
                  onChangeText={ username => this.setState({ username })}
                />
                <TextInput
                  placeholder="Password"
                  style={styles.textInput}
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                  secureTextEntry
                />
              </View>
              <View style={styles.buttonHolder}>
                <Button
                  title="Sign In"
                  onPress={this.submit}
                />
                <Loader showLoader={this.state.showLoader} />
                <Button
                  title="Sign Up"
                  onPress={() => { this.props.navigation.navigate('SignUp'); }}
                />
              </View>
              <View style={styles.googleBtn}>
                <Button
                  title="Continue with Google"
                  onPress={() => { this.props.navigation.navigate('Board'); } }
                />
                <Text
                  style={styles.pageTitle}
                  onPress={() => { this.props.navigation.navigate('Welcome'); }}
                >
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
