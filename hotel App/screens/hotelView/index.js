import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {colors} from '../../styles';
import Header from './components/header';
import Bookmark from './components/Bookmark';
import About from './components/About';
import Stats from './components/Stats';
import Amenities from './components/Amenities';
import Extras from './components/Extras';

export default function index() {
  return (
    <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        
        <Header />

        <View>

          <Bookmark />
          <About />
          <Stats />
          <Amenities />
          <Extras />
          
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg
  },
});
