import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import InputDatePicker from "./inputDatePicker";

export default function ItemView({ item }) {

  return(
      <View>
        <InputDatePicker></InputDatePicker>
      </View>
  );
}
