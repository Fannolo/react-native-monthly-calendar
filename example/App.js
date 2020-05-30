/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {Calendar} from 'react-native-monthly-calendar';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
  _onDateChange = (month, year) => {
    alert('CHANGED ' + month + '/' + year);
  };
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{backgroundColor: '#000'}}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={[styles.scrollView, {backgroundColor: '#000'}]}>
            <View style={{flex: 1}}>
              <Calendar
                onDateChange={this._onDateChange.bind(this)}
                textColor={'#000'}
                activeDateTextColor={'#fff'}
                activeDateBackgroundColor={'#000'}
                backgroundColor={'#fff'}
                selectedDate={'2020-04'}
                minDate={'2019-05'}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});
