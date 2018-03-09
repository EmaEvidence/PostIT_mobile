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
  Picker
} from 'react-native';

export default class GroupList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.createGroup}>
            <View style={styles.createGroupWrapper}>
              <TextInput style={styles.createGroupText}
                placeholder="Search User"
              />
            </View>
            <View style={styles.contTwo}>
              <Button
                title='Search'
                color='#DBDADA'
              />
              <Button
                onPress={() => this.props.navigation.goBack()}
                title="Dismiss"
              />
          </View>
        </View>
        <View style={styles.groupContainer}>
          <ScrollView style={{ width: '100%'}}>
            <View style={styles.groupNameContainer}>
              <View style={styles.userContainer}>
                <Text style={styles.groupText}>
                  Username 
                </Text>
                <Button
                  title='Add'
                  color='#DBDADA'
                />
              </View>
              <View style={styles.userContainer}>
                <Text style={styles.groupText}>
                  Username 
                </Text>
                <Button
                  title='Remove'
                  color='#DBDADA'
                />
              </View>
              <View style={styles.userContainer}>
                <Text style={styles.groupText}>
                  Username 
                </Text>
                <Button
                  title='Add'
                  color='#DBDADA'
                />
              </View>
              <View style={styles.userContainer}>
                <Text style={styles.groupText}>
                  Username 
                </Text>
                <Button
                  title='Remove'
                  color='#DBDADA'
                />
              </View>
              <View style={styles.userContainer}>
                <Text style={styles.groupText}>
                  Username 
                </Text>
                <Button
                  title='Add'
                  color='#DBDADA'
                />
              </View>
              <View style={styles.userContainer}>
                <Text style={styles.groupText}>
                  Username 
                </Text>
                <Button
                  title='Remove'
                  color='#DBDADA'
                />
              </View>
              <View style={styles.userContainer}>
                <Text style={styles.groupText}>
                  Username 
                </Text>
                <Button
                  title='Add'
                  color='#DBDADA'
                />
              </View>
              <View style={styles.userContainer}>
                <Text style={styles.groupText}>
                  Username 
                </Text>
                <Button
                  title='Remove'
                  color='#DBDADA'
                />
              </View>
              <View style={styles.userContainer}>
                <Text style={styles.groupText}>
                  Username 
                </Text>
                <Button
                  title='Add'
                  color='#DBDADA'
                />
              </View>
              <View style={styles.userContainer}>
                <Text style={styles.groupText}>
                  Username 
                </Text>
                <Button
                  title='Remove'
                  color='#DBDADA'
                />
              </View>
              <View style={styles.userContainer}>
                <Text style={styles.groupText}>
                  Username 
                </Text>
                <Button
                  title='Add'
                  color='#DBDADA'
                />
              </View>
              <View style={styles.userContainer}>
                <Text style={styles.groupText}>
                  Username 
                </Text>
                <Button
                  title='Remove'
                  color='#DBDADA'
                />
              </View>
              <View style={styles.userContainer}>
                <Text style={styles.groupText}>
                  Username 
                </Text>
                <Button
                  title='Add'
                  color='#DBDADA'
                />
              </View>
              <View style={styles.userContainer}>
                <Text style={styles.groupText}>
                  Username 
                </Text>
                <Button
                  title='Remove'
                  color='#DBDADA'
                />
              </View>
              <View style={styles.userContainer}>
                <Text style={styles.groupText}>
                  Username 
                </Text>
                <Button
                  title='Add'
                  color='#DBDADA'
                />
              </View>
              <View style={styles.userContainer}>
                <Text style={styles.groupText}>
                  Username 
                </Text>
                <Button
                  title='Remove'
                  color='#DBDADA'
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#F5FCFF',
    overflow: 'scroll',
    margin: 0,
    flexDirection: 'column',
    backgroundColor: '#EBEBEB',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  groupContainer: {
    flexDirection: 'column',
    backgroundColor: '#EBEBEB',
    width: '80%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '95%',
    margin: 10,
    height: '10%',
    backgroundColor: '#EBEBEB',
  },
  contTwo: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  createGroupText: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    opacity: 0.3,
  },
  createGroupWrapper: {
    width: '70%',
    padding: 0,
  },
  groupNameContainer: {
    width: '100%',
    margin: 6,
    flexDirection: 'column',
    height: '50%',
  },
  groupText: {
    paddingLeft: 3,
    paddingTop: 3,
    paddingRight: 3,
    textAlign: 'center',
    fontSize: 20,
    margin: 6,
    backgroundColor: '#DBDADA',
  },
  userContainer: {
    width: '94%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderWidth: 2,
    margin: 3,
  }
});
