import React, { useState } from 'react'
import * as Clipboard from 'expo-clipboard';
import { View, Text, Button } from 'react-native'
const TokenButton = ({ expoPushToken }) => {

  const [visible, setVisible] = useState(true)

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(expoPushToken);
    const clipboardContent = await Clipboard.getStringAsync();
    if (clipboardContent === expoPushToken) {
      setVisible(false)
    }
  };

  return (
    <>
      {
        visible ?
          (
            <View>
              <Text>
                {expoPushToken}
              </Text>

              <Button
                title='Copy Token'
                onPress={copyToClipboard}
              />
            </View>
          )
          :
          (
            null
          )
      }
    </>
  )
}

export default TokenButton