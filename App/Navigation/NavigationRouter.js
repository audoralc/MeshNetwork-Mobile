import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import KioskOne from '../Containers/Kiosk/KioskOne'; 
import KioskTwo from '../Containers/Kiosk/KioskTwo'; 
import Events from '../Containers/Events'; 
import EventDetail from '../Containers/Events/EventDetail'; 
import AddEvent from '../Containers/Events/AddEvent';
import UserSearch from '../Containers/UserSearch';
import UserProfile from '../Containers/UserProfile';
import BookingHome from '../Containers/Booking';
import SpaceBooking from '../Containers/Booking/SpaceBooking';
import MentorBooking from '../Containers/Booking/MentorBooking';
import TourBooking from '../Containers/Booking/TourBooking';
import Root from '../Containers/Root';


class NavigationRouter extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">      
          <Scene initial key='root' component={Root} title='Root' hideNavBar={true} />

          <Scene key='kioskOne' component={KioskOne} title='kioskOne' hideNavBar={true} />
          <Scene key='kioskTwo' component={KioskTwo} title='kioskTwo' hideNavBar={true} />         

          <Scene key='addEvent' component={AddEvent} title='addEvent' hideNavBar={true} />
          <Scene key='eventDetail' component={EventDetail} title='eventDetail' hideNavBar={true} />    

          <Scene key='userSearch' component={UserSearch} title='userSearch' hideNavBar={true} />
          <Scene key='userProfile' component={UserProfile} title='userProfile' hideNavBar={true} />

          <Scene key='bookingHome' component={BookingHome} title='bookingHome' hideNavBar={true} />
          <Scene key='spaceBooking' component={SpaceBooking} title='spaceBooking' hideNavBar={true} />
          <Scene key='mentorBooking' component={MentorBooking} title='mentorBooking' hideNavBar={true} />
          <Scene key='tourBooking' component={TourBooking} title='tourBooking' hideNavBar={true} />
                    
        </Stack>
      </Router>
    );
  }
}
export default NavigationRouter;
