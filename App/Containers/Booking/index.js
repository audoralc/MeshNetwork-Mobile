// @flow

import React, { Component } from 'react';
import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux'; 
import { H2, H3, Content, Item, Input, Icon, Toast, Label } from 'native-base'; 
import SpacePickerExample from '../SpacePicker'; 

import styles from './BookingStyles';

export default class BookingHome extends React.Component {

  render () {

    return (
      <ScrollView>  
          <H2 style={styles.bookingHeader}>
            Booking System
          </H2>

        <View>
            <Text style={styles.bookingInstructions}> 
                some booking instructions 
            </Text>
        </View>


        <View style={styles.reasonCardBlock}> 

          <View>
            <H3 style={styles.reasonPrompt}> What kind? </H3>
          </View> 

            <TouchableOpacity onPress={NavigationActions.spaceBooking}> 
              <View style={styles.contentCard}>
              <Text style={styles.cardTitle}> Spaces</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={NavigationActions.mentorBooking}> 
              <View style={styles.contentCard}>
              <Text style={styles.cardTitle}> Mentoring </Text>
              </View>
            </TouchableOpacity> 

            <TouchableOpacity onPress={NavigationActions.tourBooking}>  
              <View style={styles.contentCard}>
              <Text style={styles.cardTitle}>Tours </Text>            
              </View>
            </TouchableOpacity>

        </View>

      </ScrollView>
    )
  }
}
