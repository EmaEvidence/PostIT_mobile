import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  Button,
  Picker,
  AsyncStorage,
  BackHandler,
  Alert,
} from 'react-native';
import Header from './Header';

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
    height: '105%',
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
    margin: 20,
    backgroundColor: '#EBEBEB',
  },
  buttonHolder: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "flex-start",
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
  },
  sendMessage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#8AC6C6',
    margin: 10,
    borderRadius: 5,
    height: '10%',
    minHeight: 80,
    backgroundColor: '#8AC6C6',
  },
  contTwo: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  sendMessageText: {
    width: '100%',
    backgroundColor: '#EBEBEB',
    flex: 1,
    flexWrap: 'wrap',
  },
  sendMessageWrapper: {
    width: '70%',
    padding: 0,
    flexDirection:'row',
  },
  messageContainer: {
    width: '96%',
    backgroundColor: '#EBEBEB',
    margin: 6,
    flexDirection: 'column',
  },
  messageDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  messageText: {
    paddingLeft: 3,
    paddingTop: 3,
    paddingRight: 3,
    textAlign: 'center',
  }
});

/**
 *
 */
export default class MessageBoard extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Header />,
      headerLeft: (
        <Button
          title="ccc"
          color="#EBEBEB"
          onPress={() => this.showModal(navigation)}
        />
      ),
      headerRight: (
        <Button
          title="bbb"
          color="#EBEBEB"
          onPress={() => {
            Alert.alert('response');
            navigation.navigate('groupDetailModal');
          }}
        />
      ),
      headerStyle: {
        backgroundColor: '#8AC6C6',
        paddingLeft: 10,
        paddingRight: 10,
      },
    };
  };
  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
    this.onNavigatorEvent = this.onNavigatorEvent.bind(this);
  }
  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.onNavigatorEvent);
    AsyncStorage.getItem('token', (err, result) => {
      if (result) {
        this.setState({
          token: result
        });
      }
    });
  }

  onNavigatorEvent = () => {
    BackHandler.exitApp();
  }

  showModal = (navigation) => {
    Alert.alert('response');
    navigation.navigate('groupListModal')
  }

  /**
   *
   */
  render() {
    // if (this.state.token !== '') {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.pageTitle}>
            Andela 21
          </Text>
          <View style={styles.formContainer}>
            <ScrollView style={{ width: '100%' }}>
              <View style={styles.messageContainer}>
                <Text style={styles.messageText}>
                  dahjsd dasbdhjasd sdjhasdasd sdjhasd dsdasd dhbasd shdjsd hsdasd jasds jhh hjsd ksd kasdasd 
                </Text>
                <View style={styles.messageDetailsContainer}>
                  <Text style={styles.messageDate}>
                    12/12/2018
                  </Text>
                  <Text style={styles.messagePriority}>
                    Urgent
                  </Text>
                  <Text style={styles.messageOwner}>
                    Evidence
                  </Text>
                </View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.messageText}>
                  dahjsd dasbdhjasd sdjhasdasd sdjhasd dsdasd dhbasd shdjsd hsdasd jasds jhh hjsd ksd kasdasd 
                </Text>
                <View style={styles.messageDetailsContainer}>
                  <Text style={styles.messageDate}>
                    12/12/2018
                  </Text>
                  <Text style={styles.messagePriority}>
                    Urgent
                  </Text>
                  <Text style={styles.messageOwner}>
                    Evidence
                  </Text>
                </View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.messageText}>
                  dahjsd dasbdhjasd sdjhasdasd sdjhasd dsdasd dhbasd shdjsd hsdasd jasds jhh hjsd ksd kasdasd 
                </Text>
                <View style={styles.messageDetailsContainer}>
                  <Text style={styles.messageDate}>
                    12/12/2018
                  </Text>
                  <Text style={styles.messagePriority}>
                    Urgent
                  </Text>
                  <Text style={styles.messageOwner}>
                    Evidence
                  </Text>
                </View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.messageText}>
                  dahjsd dasbdhjasd sdjhasdasd sdjhasd dsdasd dhbasd shdjsd hsdasd jasds jhh hjsd ksd kasdasd 
                </Text>
                <View style={styles.messageDetailsContainer}>
                  <Text style={styles.messageDate}>
                    12/12/2018
                  </Text>
                  <Text style={styles.messagePriority}>
                    Urgent
                  </Text>
                  <Text style={styles.messageOwner}>
                    Evidence
                  </Text>
                </View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.messageText}>
                  dahjsd dasbdhjasd sdjhasdasd sdjhasd dsdasd dhbasd shdjsd hsdasd jasds jhh hjsd ksd kasdasd 
                </Text>
                <View style={styles.messageDetailsContainer}>
                  <Text style={styles.messageDate}>
                    12/12/2018
                  </Text>
                  <Text style={styles.messagePriority}>
                    Urgent
                  </Text>
                  <Text style={styles.messageOwner}>
                    Evidence
                  </Text>
                </View>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.messageText}>
                  dahjsd dasbdhjasd sdjhasdasd sdjhasd dsdasd dhbasd shdjsd hsdasd jasds jhh hjsd ksd kasdasd 
                </Text>
                <View style={styles.messageDetailsContainer}>
                  <Text style={styles.messageDate}>
                    12/12/2018
                  </Text>
                  <Text style={styles.messagePriority}>
                    Urgent
                  </Text>
                  <Text style={styles.messageOwner}>
                    Evidence
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.sendMessage}>
            <View style={styles.sendMessageWrapper}>
              <TextInput style={styles.sendMessageText}
                placeholder="Enter your message"
                multiline
              />
            </View>
            <View style={{ width: '10%'}}>
              <Picker
                selectedValue={"Priority"}
                onValueChange={(itemValue, itemIndex) => 
                  { console.log(itemValue, itemIndex); }}
              >
                <Picker.Item label="Java" value="Normal" />
                <Picker.Item label="JavaScript" value="Urgent" />
                <Picker.Item label="JavaScript" value="Critical" />
              </Picker>
            </View>
            <View style={styles.contTwo}>
              <Button
                title="Send"
                color="#EBEBEB"
              />
            </View>
          </View>
        </View>
      </View>
    );
    // }
  }
}
