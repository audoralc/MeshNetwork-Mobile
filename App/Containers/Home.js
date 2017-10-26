// @flow

import React, { Component } from 'react';
import { ScrollView, Image, View, Text, Button } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux'; 
import { Container } from 'native-base';

// Styles
import styles from './Home/HomeStyle';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  };

  // componentWillMount() {
  //   this.getSkills();
  // }

  // getSkills = () => {
  //   fetch('http://192.168.3.176:8000/api/skills', {
  //     method:'GET',
  //   })
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(json) {
  //     console.warn(json);
  //   })
  // }

  render () {

    return (
      <Container>
        <View style={styles.appBar}>
          <Text style={styles.titleStyle}> Home </Text>
        </View>

        <View style={styles.welcome}>
          <Button title='KioskOne' onPress={NavigationActions.kioskOne}/>
          <Button title='KioskTwo' onPress={NavigationActions.kioskTwo} />
          <Button title='EventDetail' onPress={NavigationActions.eventDetail} />
          <Button title='AddEvent' onPress={NavigationActions.addEvent} />
          
          <Button title='userSearch' onPress={NavigationActions.userSearch} />
          <Button title='userProfile' onPress={NavigationActions.userProfile} />

          <Button title='BookingHome' onPress={NavigationActions.bookingHome} />
        </View>

      </Container>
    )
  }
}
