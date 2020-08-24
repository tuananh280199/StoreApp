import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SkiiImage from './assets/skii.png'
import CategoryListItem from './components/CategoryListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItem title="Category Item 1" image={SkiiImage}/>
      <CategoryListItem title="Category Item 2" image={SkiiImage}/>
      <CategoryListItem title="Category Item 3" image={SkiiImage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems : 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft : 16,
    paddingRight: 16
  },
});
