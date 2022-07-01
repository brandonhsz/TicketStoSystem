import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native'
import DangerText from './DangerText';

const Tickets = ({ tickets, branch }) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.branchText}>{branch}</Text>
      </TouchableOpacity>


      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { setModalVisible(false) }}

      >
        <Pressable
          onPress={() => { setModalVisible(!modalVisible) }}
          style={styles.centeredView}
        >
          <View style={styles.modalView}>
            {
              tickets.length > 0 ? (
                tickets.map((data) => (
                  <View
                    key={data.TicketNumber}
                    style={styles.ticketContainer}
                  >
                    <Text style={styles.dataText}>
                      Number  : {data.TicketBranch.trim()}
                    </Text>
                    <Text style={styles.dataText}>
                      Time    : {data.TicketTime.trim()}
                    </Text>
                    <Text style={styles.dataText}>
                      Subject : {data.TicketSubjet.trim()}
                    </Text>
                    <Text style={styles.dataText}>
                      Author  : {data.TicketAuthor.trim()}
                    </Text>

                  </View>
                ))
              ) : (<DangerText message='Sin tickets' />)
            }
          </View>
        </Pressable>
      </Modal>

    </>
  )
}

const styles = StyleSheet.create({
  ticketContainer: {
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 1,
    padding: 10,
    margin: 2,
    minWidth: "90%",
    maxWidth: "90%"
  },
  branchText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 10,
    textAlign: "center"
  },
  dataText: {
    color: "white",
    fontFamily: "monospace",
  },
  centeredView: {
    flex: 1,

    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    flexDirection: "column",
  },
})

export default Tickets