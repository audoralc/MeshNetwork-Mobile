// @flow

import React, { Component } from 'react';
import { ScrollView, Image, View, Text, Button } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';
import { H2, H3, Content, Item, Input, Icon, Toast, Label } from 'native-base'; 
import DateTimePickerTester from '../DateTimePicker'; 
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form';

import styles from './BookingStyles';

export default class TourBooking extends React.Component {

  render () {

    return (
      <ScrollView>
        <H2 style={styles.bookingChoiceHeader}> Choose a space</H2>

        <View style={styles.bookingBody}> 

          <View style={styles.tourBookForm}> 
            <GiftedForm formName="tourPersonInfo">
              
            </GiftedForm>
          </View>
        
          <View style={styles.bookingDateTimePicker}>
            <DateTimePickerTester />
          </View>

        </View> 

          <View style={styles.bookingSubmitExit}>
              <Button title="Submit" style={styles.bookingSubmitExit} onPress={() => Toast.show({
                    text: 'Got it!', 
                    position: 'top',
                    type: 'success',  
                    buttonText: 'OK',
                })}>  </Button>
          </View>

      </ScrollView>
    )
  }
}
