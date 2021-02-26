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
  View,
  Text,
  StatusBar,
} from 'react-native';

import Barang from "./Component/Barang";
import Header from "./Component/Header";

class App extends React.Component{
  render(){
    return (
      <View>
        <Header data="SELAMAT DATANG"/>
        <Barang />
      </View>
    )
  }
}

export default App;
