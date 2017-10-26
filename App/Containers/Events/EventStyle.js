import { StyleSheet, Dimensions } from 'react-native';

const viewPort = Dimensions.get('window').height - 30;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 60; 

export default StyleSheet.create({
  
  // all pages styles
  
  container: {
    flex:1,
    flexDirection:'column',
    minHeight:viewPort,
  },

  eventTagRow: {
    marginLeft: 5, 
    marginRight: 5, 
    display: 'flex', 
    flexDirection: 'row',   
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: 25, 
  }, 

  eventTag: { 
    borderRadius: 10, 
    padding: 5, 
    borderWidth: 1, 
    borderColor: '#000', 
    backgroundColor: '#ffbe39',
  }, 

  // Event Home styles 

  // Ind. Event Detail pg styles

  eventImage: {
    height: 200,
    width: width,  
    backgroundColor: '#BBBBBB',   
  }, 
  
  eventName: { 
    fontSize: 32,
    color: '#ffffff',
    marginTop: 120, 
    marginLeft: 10,  
  }, 

  eventDetails: {
    height: 60, 
    backgroundColor: '#ffffff', 
    marginBottom: 30,
    paddingRight: 10,
    paddingLeft: 5,
    paddingTop: 20, 
    display: 'flex', 
    flexDirection: 'row',   
    justifyContent: 'space-between', 
    alignContent: 'center', 
  }, 

  detailText: {
    fontSize: 18,
  }, 

  eventDescription: {
    marginTop: 30, 
    height: 150, 
    padding: 20, 
    backgroundColor: '#CCCCCC', 
  }, 

  eventRegister: { 
    width: width - 60, 
    alignSelf: 'center', 
    marginTop: 10, 
  }, 

  eventOrganizers: { 
    marginTop: 50, 
    marginBottom: 20, 
    marginLeft: 5, 
    marginRight: 5, 
    borderBottomColor: 'blue', 
    borderBottomWidth: 1,
  }, 
  
  organizerHeader: { 
    fontSize: 16, 
    fontWeight: 'bold', 
  }, 
  
  userAvatar: {
    height: 50, 
    width: 50, 
    borderRadius: 50,
    margin: 20,
  }, 
  
  eventAttendees: {  
    marginLeft: 5, 
    marginRight: 5,
  }, 

  attendeesHeader: { 
    fontSize: 16, 
    fontWeight: 'bold', 
  }, 

  eventMap: {
    width: width, 
    marginTop: 50, 
  }, 

  eventSpace: {
    backgroundColor: "#263238",
    color: "#ffffff", 
    padding: 5, 
    paddingTop: 15, 
    fontSize: 18,
  }, 

  eventAddress: {
    backgroundColor: "#263238",
    color: "#ffffff", 
    padding: 5,
    paddingBottom: 15, 
  }, 

  // Add Event Form styles 

  addEventTitle: { 
    height: 100, 
    paddingTop: 50,
    paddingBottom: 20, 
    backgroundColor: "#007AFF",  
    color: "#ffffff", 
  }, 

  addEventName: {
    marginTop: 15,
    marginBottom: 20, 
    marginLeft: 10, 
    marginRight: 10,  
  }, 
  
  addDateTimeWrap: {
    height: 100, 
    marginTop: 20,
    marginBottom: 40, 
    flex: 1,     
  }, 

  addPickerRow: {
    marginTop: 20, 
    flexDirection: 'row',
  }, 

  addEventTagPicker: { 
    margin: 10, 
    maxHeight: 198, 
    //wonky height for perfect fit 
  },

  addEventDes: {
    height: 200, 
    borderColor: 'blue', 
    borderWidth: 1, 
    marginBottom: 20, 
    marginLeft: 5, 
    marginRight: 5,
    marginTop: 40, 
  }, 
  
  addSubmitButton: {
    marginLeft: 30, 
    marginRight: 30, 
    marginBottom: 10  
  },  
  
  // DateTimePicker styles

  addDateTimeButton: { 
    borderRadius: 2,
    borderColor: "#DDDDDD",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 1,  
    marginLeft: 5,
    marginRight: 5,  
    padding: 10, 
    backgroundColor: '#263238',
    color: '#ffffff', 
  }, 

}) 