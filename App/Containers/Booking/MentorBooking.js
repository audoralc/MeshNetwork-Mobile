// @flow

import React, { Component } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';
import { H2, H3, Content, Item, Input, Icon, Toast, Label } from 'native-base'; 

import styles from './BookingStyles';

export default class MentorBooking extends React.Component {

  render () {

    return (
      <ScrollView>
        <H2> Find your mentor</H2>

        <View className="userPicker"> 

        </View>
        
        <View className="dateTimePicker">

        </View>

        <View className="submitButtonwithToast">
            <Button> Submit </Button>
        </View>

      </ScrollView>
    )
  }
}
