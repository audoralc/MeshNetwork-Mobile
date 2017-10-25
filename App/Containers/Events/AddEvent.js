// @flow

import React, { Component } from 'react';
import { ScrollView, Image, View, Text, Button, TextInput, Picker } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux'
import { H2, H3, Content, Item, Input, Icon, Toast, Label } from 'native-base'; 
import DateTimePickerTester from '../DateTimePicker'; 
import FormExample from '../FormExample';

import styles from './EventStyle';

export default class AddEvent extends React.Component {


  render () {

    return (
      <ScrollView>
        <H2 style={styles.addEventTitle}> Create an event </H2>

        <Content style={styles.addEventName}>
          <Item floatingLabel>
            <Label> Event name</Label>
            <Input />
          </Item>
        </Content>

        <View style={styles.addDateTimeWrap}> 
          <H3> choose a date + time </H3>

          <View style={styles.addPickerRow}> 
            <DateTimePickerTester />
            <DateTimePickerTester />
          </View> 
        </View>

        <View style={styles.addTagPicker}>  

          <View style={styles.eventTagRow}> 
              <View>
                <Text style={styles.eventTag}> Programming </Text>
              </View>
              <View>
                <Text style={styles.eventTag}> Python </Text>
              </View>
              <View>
                <Text style={styles.eventTag}> Development </Text>
              </View>
          </View> 

          <FormExample />          
        </View>

        

        <TextInput style={styles.addEventDes} multiline={true} numberOfLines={8}> </TextInput>

        <Button title='Submit'  onPress={() => Toast.show({
              text: 'Got it!', 
              position: 'top',
              type: 'success',  
              buttonText: 'OK', 
            })}/> 

      </ScrollView>
    )
  }
}
