import AsyncStorage from '@react-native-async-storage/async-storage';

export function getItems() {
  return AsyncStorage.getItem('codes').then(data => JSON.parse(data || '[]'));
}

export async function editItem(item) {
  let data = JSON.parse((await AsyncStorage.getItem('codes')) || '[]');
  data = data.map(_it => (_it._id !== item._id ? _it : item));
  await AsyncStorage.setItem('codes', JSON.stringify(data));
  return item;
}

export async function addItemt(item) {
  let data = JSON.parse((await AsyncStorage.getItem('codes')) || '[]');
  data = [...data, {_id: Date.now(), ...item}];
  await AsyncStorage.setItem('codes', JSON.stringify(data));
  return item;
}
export async function deleteItem(item) {
  let data = JSON.parse((await AsyncStorage.getItem('codes')) || '[]');
  data = data.filter(_it => _it._id !== item._id);
  await AsyncStorage.setItem('codes', JSON.stringify(data));
  return true;
}