import React, { Component } from 'react';
import {  View, Text, ScrollView, Dimensions, TextInput } from "react-native";
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form';



export default class UserPickerExample extends React.Component {
    constructor(props) {
      super(props);
    };
  
    render () {
  
      return (
        <ScrollView>

        <GiftedForm openModal={(route) => {
          navigator.push(route);}} > 
  
        <GiftedForm.SelectUserWidget
          code='alpha2'
          name='country'
          title='Country'
          autoFocus={true}
    />       
    </GiftedForm> 
        </ScrollView>
      )
    }
  }; 
