import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {getWeather} from './api'

import No from './No'
import Yes from './Yes'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      displayHeader: true,
      displayResult: true,
      yes: true,
      weatherToday: {
        city: '',
        temp: 0,
        description: '',
        icon: '',
        low: 0,
        high: 0
      }
    }
    this.handleSearchClick = this.handleSearchClick.bind(this)
  }
  componentDidMount () {
    this.handleSearchClick('Auckland')
  }

  handleSearchClick (searchterm) {
    getWeather(searchterm, (err, res) => {
      if (err) return err
      this.setState({
        weatherToday: {
          city: res.name,
          temp: res.main.temp,
          description: res.weather[0].description,
          icon: res.weather[0].icon,
          low: res.main.temp_min,
          high: res.main.temp_max
        },
        displayResult: true
      })
      if (res.weather[0].icon === '09d' || res.weather[0].icon === '09n' || res.weather[0].icon === '10n'  || res.weather[0].icon === '10d') {
        this.setState({
          yes: true
        })
      } else {
        this.setState({
          yes: false
        })
      }
    })
  }

  render () {
    return (
      <View style={styles.container}>
        {this.state.yes && <Yes />}
        {!this.state.yes && <No />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
