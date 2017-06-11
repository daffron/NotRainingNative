import React from 'react'
import {StyleSheet, Image} from 'react-native'

class DryBackground extends React.Component {
  render () {
    return (
      <Image source={require('./images/sunny-auck.jpg')} style={styles.backgroundImage}>
        {this.props.children}
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
})


export default DryBackground
