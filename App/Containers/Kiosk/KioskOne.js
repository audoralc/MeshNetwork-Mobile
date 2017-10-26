import React, { Component } from 'react';
import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux'; 
import { Header, Item, Input, Icon, Button, Card, CardItem, Body, List, ListItem, H2, H3 } from 'native-base';
import FormExample from '../FormExample';


// Styles
import styles from './KioskStyles';

export default class KioskOne extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {

    var reasons = ['Work', 'Event', 'Tour'];

    return (
      <ScrollView style={styles.container}> 

        <ScrollView style={styles.topHalf}>        
            <FormExample />         
        </ScrollView>
        
        <View className="welcomeMessage"></View>
         
        <View style={styles.reasonSelect}>         
          <List className="cardContainer" dataArray={reasons}
          renderRow={(reason) => 
          <TouchableOpacity> 
            <ListItem style={styles.contentCard} onPress={NavigationActions.kioskTwo}> 
                  <Body style={styles.cardBody}>           
                      <H3 style={styles.cardTitle}> 
                      {reason} 
                      </H3>
                  </Body>
            </ListItem>
            </TouchableOpacity>
          }> 
          </List>       
        </View>
      </ScrollView>
    )
  }
}