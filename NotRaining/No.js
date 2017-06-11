import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
//import DryBackground from './DryBackground'

function No (props) {
  return (

      <View style={styles.container}>
        <Text style={styles.text}> Is it raining in Auckland? </Text>
        <br /><br />
        <Text style={styles.text}>No</Text>
      </View>

  )
}

export default No


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch'
  },
  text: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 32
  }
})

