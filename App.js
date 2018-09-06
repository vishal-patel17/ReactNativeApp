import React from 'react';
import { StyleSheet, Text, View, Dimensions, Geolocation } from 'react-native';
import {SearchBar} from 'react-native-elements';

const dimensions = Dimensions.get('window');
const sBoxwidth = dimensions.width;

//var someMethod = "test";

export default class App extends React.Component {

  render() {
    return (
      <View>
        <SearchBar
        lightTheme
        width = {sBoxwidth}
        platform="android"
        clearIcon={{ color: 'red' }}
        searchIcon={false} // You could have passed `null` too
        //onChangeText={someMethod}
        //onClear={someMethod}
        placeholder='Type Here...' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
