import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image,Alert } from 'react-native';

import Moment from 'react-moment'
import moment from 'moment-timezone';

import _ from 'lodash'

import DateTime from 'react-native-customize-selected-date-v2'
 
export default class calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date:[]
    }
  }
  onChangeDate(date) {
    // alert(date);
    const today = new Date();
 
    if (new Date(date) <= today) {
      return Alert.alert(
        'Oops',
        'can not go back from today',
      );
    } else if (this.state.date.includes(date)) {
      this.removeDate(date);
    } else {
      this.setState({
        date: [...this.state.date, date].sort(function(a, b) {
          return a < b ? -1 : a > b ? 1 : 0;
        }),
      });
    }
  }
  removeDate(selectedDate) {
    let filteredArray = this.state.date.filter(item => item !== selectedDate);
    this.setState({date: filteredArray});
  }
  renderChildDay(day) {
    if (_.includes(this.state.date, day)) {
      return <View style={styles.icLockRed} />;
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
          <DateTime
              containerStyle={{top: -40}}
              warpDayStyle={{backgroundColor: 'white'}}
              textDayStyle={{color: 'black'}}
              notCurrentDayOfMonthStyle={{color: '#adadad'}}
              currentDayStyle={{color: '#FA4B41', fontWeight: 'bold'}}
              dateSelectedWarpDayStyle={{backgroundColor: 'red'}}
              changeDate={date => this.onChangeDate(date)}
              format="YYYY-MM-DD"
              renderChildDay={day => this.renderChildDay(day)}
            />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icLockRed: {
    width: 40,
    height: 40,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#A1DD70',
  },
});