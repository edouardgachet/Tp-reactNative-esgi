import React, { useContext } from 'react';
import ListProvider from "./contexts/ListContext";
import AddList from "./components/AddList";
import { Text, StyleSheet } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ItemView from "./components/itemView";

const App: () => Node = () => {

  return (
    <ListProvider>
      <Text>accueil</Text>
      <AddList/>
    </ListProvider>
  );
};


export default App;
