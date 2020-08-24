import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

import SkiiImage from './assets/skii.png'
import CategoryListItem from './components/CategoryListItem';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      categories : [
        { id: 1, name: "Dụng cụ trượt tuyết", image: `${SkiiImage}`},
        { id: 2, name: "Quần áo trượt tuyết", image: `${SkiiImage}`},
        { id: 3, name: "Kính mũ", image: `${SkiiImage}`}
      ]
    }
  };

  render(){
    const { categories } = this.state;
    return (
      <View>
        {/* <ScrollView style={{ paddingLeft: 16, paddingRight: 16}} >
          {categories.map(category =>
            <CategoryListItem 
              key={category.id}
              category = {category}/>
          )}
        </ScrollView> */}
        <FlatList 
          data={categories}
          renderItem={({item}) => <CategoryListItem category={item}/>}
          keyExtractor={item => `${item.id}`}
          style={{ paddingLeft: 16, paddingRight: 16}}
        />
      </View>
    )
  };
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
