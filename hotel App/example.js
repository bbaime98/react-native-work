import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {colors} from './styles';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg
  },
});
