import { StyleSheet, Dimensions } from 'react-native';

const viewPort = Dimensions.get('window').height - 30;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 60; 

export default StyleSheet.create({
    // shared styles
    bookingChoiceHeader: {
        color: '#EEEEEE',
        backgroundColor: '#263238',
        padding: 20,
        height: 100,
        marginBottom: 5,
        paddingRight: 30, 
        fontSize: 20,
        textAlign: 'center', 
    },

    bookingSubmitExit: { 
        marginLeft: 30, 
        marginRight: 30, 
    }, 

    bookingBody: {
        
        marginBottom: 20,  
    }, 

    // Booking Home styles

    bookingHeader: {
        height: 100, 
        paddingTop: 45,
        paddingBottom: 20,
        paddingLeft: 10,  
        backgroundColor: "#007AFF",  
        color: "#ffffff", 
    }, 

    bookingInstructions: {
        paddingTop: 30, 
        paddingBottom: 20, 
        paddingLeft: 10, 
        backgroundColor: '#263238',
        color: "#ffffff",  
    }, 

    reasonCardBlock: {
        marginTop: 50, 
        display: 'flex', 
    }, 

    reasonPrompt: {
        alignSelf: 'center',
        marginRight: 10, 
        marginBottom: 20, 
    }, 

    contentCard: { 
        borderRadius: 2,
        borderColor: "#DDDDDD",
        backgroundColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3, 
        flex: 1,  
        margin: 20,
        height: 75,
    }, 

    cardTitle: { 
        flex:1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', 
        marginRight: 10, 
        paddingTop: 20, 
        fontSize: 18, 
    }, 

    // Space booking styles
    
    

    // Mentor booking styles 

    // Tour booking styles 

}) 