import React from 'react'
import {StyleSheet, Image} from 'react-native'

class WetBackground extends React.Component {
  render () {
    return (
      <Image source={require('./images/rainy-auck.jpg')} style={styles.backgroundImage}>
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


export default WetBackground
