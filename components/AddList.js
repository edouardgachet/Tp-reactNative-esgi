import React, {useContext, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {View} from 'react-native';
import {ListContext} from '../contexts/ListContext'

export default function AddList({onSubmit}) {
  const {addElement} = useContext(ListContext)
  const [values, setValues] = useState({
    name: '',
    type: '',
  });

  const _onSubmit = () => {
    console.log('submit + ' + JSON.stringify(values))
    addElement(values)
  };
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleChange2 = function (name) {
    return function (value) {
      setValues({
        ...values,
        [name]: value,
      });
    };
  };

  return (
    <View>
      <TextInput
        label="Name"
        value={values.name}
        onChangeText={value =>
          handleChange({target: {value, name: 'name'}})
        }
      />
      <TextInput
        label="Type"
        value={values.type}
        onChangeText={handleChange2('type')}
      />
      <Button mode="contained" onPress={_onSubmit}>
        Créer
      </Button>
    </View>
  );
}