import { Text, StyleSheet } from 'react-native'
import React from 'react'

export default function DangerText({ message = 'null' }) {
  return (
    <>
      <Text style={styles.dangerText}>{message.toUpperCase()}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  dangerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',

  }
})