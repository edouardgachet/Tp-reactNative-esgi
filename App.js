import React, { useContext } from 'react';
import ListProvider from "./contexts/ListContext";
import AddList from "./components/AddList";
import { Text, StyleSheet } from "react-native";

const App = () => {

  return (
    <ListProvider>
      <Text>accueil</Text>
      <AddList/>
    </ListProvider>
  );
};

export default App;
