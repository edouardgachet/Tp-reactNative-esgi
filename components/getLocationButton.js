import React from "react";
import { View, Button, Text } from "react-native";
import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function GetLocationButton(){
  const getLocation = async () => {
    Geolocation.watchPosition(
      async (position) => {
        let positionObject = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        await AsyncStorage.setItem('@position', JSON.stringify(positionObject));
        const posLog = await AsyncStorage.getItem('@position');
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000  }
    );
  };

  return (
    <View>
      {/*<ul>*/}
      {/*  {Object.keys(item).forEach(([index, value]) => {*/}
      {/*    <li>*/}
      {/*      <Text style={{ fontWeight: "bold" }}>{index}</Text> : {value}*/}
      {/*    </li>;*/}
      {/*  })}*/}
      {/*</ul>*/}

      <Button title="Get Geolocation" onPress={getLocation} />
    </View>
  );
}
