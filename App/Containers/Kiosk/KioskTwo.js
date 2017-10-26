import React, { Component } from 'react';
import { ScrollView, Image, View, Text, Button } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux'; 
import { Card, CardItem, Body, List, ListItem, Toast, H1, H2, H3 } from 'native-base';

// Styles
import styles from './KioskStyles';

export default class KioskTwo extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    var items = ['strawberry', 'banana', 'durian']; 

    return (
      <ScrollView style={styles.container}>
        <View className="suggestedEvents">
        
          <View>      
            <Text style={styles.kioskTwoInstruct}> Select an event to receive an email reminder</Text>        
          </View>       

          <H2 style={styles.eventsTitle}> Stay Involved </H2>

          <List dataArray={items}
              renderRow={(item) => 
            <ListItem  style={styles.contentCard} onPress={() => Toast.show({
                  text: 'oh snap!', 
                  position: 'bottom', 
                  buttonText: 'OK', 
                })}>                         
                <Body style={styles.cardBody}>       

                  <H3 style={styles.cardTitle}> 
                  {item} </H3>

                  <Text> </Text>
                </Body>            
            </ListItem>
              }> 
          </List>   

          <View style={styles.exitKiosk}>         
              <Button title="finish & exit" onPress={NavigationActions.kioskOn}> </Button> 
          </View> 

        </View>
      </ScrollView>
    )
  }
}

