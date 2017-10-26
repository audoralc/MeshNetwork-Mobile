import { StyleSheet, Dimensions } from 'react-native';

const viewPort = Dimensions.get('window').height - 30;
const width = Dimensions.get('window').width;

export default StyleSheet.create({

    container: {
        flex:1,
        flexDirection:'column',
        minHeight:viewPort,
      },  
    
    //KioskOne styles 

    topHalf: {
        height: 223, 
        minHeight: 200,
        marginBottom: 5,  
    },

    reasonSelect: { 
        margin: 10,
        height: 400,           
    },

    contentCard: { 
        borderRadius: 2,
        borderColor: "#DDDDDD",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3, 
        flex: 1,  
        margin: 25,
        height: 75,
    }, 

    cardBody: { 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
    }, 

    cardTitle: {
        flex:1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',  
    }, 

    // KioskTwo styles 

    kioskTwoInstruct: {
        color: '#EEEEEE',
        backgroundColor: '#263238',
        padding: 20,
        height: 100,
        marginBottom: 5,
        fontSize: 20,
        textAlign: 'center', 
    },

    eventsTitle: {
        alignContent: 'center', 
        textAlign: 'center',
        margin: 25,
    },

    exitKiosk: {
        marginBottom: 0,
        marginTop: 25,     
    }, 
}) 