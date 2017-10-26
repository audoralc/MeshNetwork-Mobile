// @flow

import React, { Component } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux'; 
import { H2, H3, Content, Item, Input, Icon, Toast, Label } from 'native-base'; 

import styles from './BookingStyles';

export default class BookingHome extends React.Component {

  render () {

    return (
      <ScrollView>  
          <H2 style={styles.bookingTitle}>
            Booking System
          </H2>

        <View>
            <Text className="bookingInstructions"> 
                some booking booking instructions 
            </Text>
        </View> 

        <H3 className="whatKind"> What kind? </H3>

        <View className="reasonCardBlock"> 

            <View onPress={NavigationActions.spaceBooking}>
            </View>

            <View onPress={NavigationActions.mentorBooking}>
            </View>

            <View onPress={NavigationActions.tourBooking}>
            </View>

        </View>

      </ScrollView>
    )
  }
}
