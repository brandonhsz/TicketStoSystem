import React, { useState } from 'react';
import * as Notifications from 'expo-notifications';
import { StyleSheet, SafeAreaView } from 'react-native';

import BranchTickets from './src/Components/BranchTickets';
import TokenButton from './src/Components/TokenButton'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {

  const [expoPushToken, setExpoPushToken] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      <BranchTickets
        setExpoPushToken={setExpoPushToken}
      />
      <TokenButton
        expoPushToken={expoPushToken}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#20232A',
  }
});