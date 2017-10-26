import { StyleSheet, Dimensions } from 'react-native';

const viewPort = Dimensions.get('window').height - 30;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 60; 

export default StyleSheet.create({
    // shared styles


    // Booking Home styles

    bookingTitle: {
        height: 100, 
        paddingTop: 50,
        paddingBottom: 20, 
        backgroundColor: "#007AFF",  
        color: "#ffffff", 
    }, 

    // Space booking styles

    // Mentor booking styles 

    // Tour booking styles 

}) 