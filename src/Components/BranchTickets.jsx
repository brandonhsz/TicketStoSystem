import * as Notifications from 'expo-notifications';
import { useState, useRef, useEffect } from 'react'
import { View, AppState, StyleSheet } from 'react-native'

import { registerForPushNotificationsAsync } from '../libs/Notifications'

import TokenButton from './TokenButton';
import Tickets from './Tickets';

import { INITIAL_STATE } from '../constants/INITIAL_STATE.js'

const BranchTickets = ({ setExpoPushToken }) => {

  const [notification, setNotification] = useState(false);
  const [tickets, setTickets] = useState({
    escorza: [INITIAL_STATE],
    revo: [INITIAL_STATE],
    tlajo: [INITIAL_STATE]
  })
  const notificationListener = useRef();
  const responseListener = useRef();

  const fetching = async () => {
    const response = await fetch("https://native-request-production.up.railway.app/tickets")
    const data = await response.json()
    const { escorza, revo, tlajo } = data[0]
    setTickets({
      escorza: escorza,
      revo: revo,
      tlajo: tlajo
    })
  }


  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {

    });

    fetching()

  }, [notification]);



  return (
    <View
      style={styles.mainContainer}>

      <View style={styles.ticketContainer}>

        <Tickets
          branch={"Escorza"}
          tickets={tickets.escorza}
        />


        <Tickets
          branch={"Revolucion"}
          tickets={tickets.revo}
        />

        <Tickets
          branch={"Tlajomulco"}
          tickets={tickets.tlajo}
        />



      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
  },

  ticketContainer: {
    flexDirection: 'row',
    position: 'relative',
    top: 390,
  }
});


export default BranchTickets