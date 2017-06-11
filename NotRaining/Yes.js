import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import WetBackground from './WetBackground'

function Yes (props) {
  return (
    <WetBackground>
      <View style={styles.container}>
        <Text style={styles.text}> Is it raining in Auckland? </Text>
        <br />
        <br />
        <Text style={styles.text}>Yes</Text>
      </View>
    </WetBackground>
  )
}

export default Yes


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  text: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 32
  }
})
