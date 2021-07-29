import AsyncStorage from '@react-native-async-storage/async-storage';

export function getList() {
  return AsyncStorage.getItem('codes').then(data => JSON.parse(data || '[]'));
}

export async function editList(item) {
  let data = JSON.parse((await AsyncStorage.getItem('codes')) || '[]');
  data = data.map(_it => (_it._id !== item._id ? _it : item));
  await AsyncStorage.setItem('codes', JSON.stringify(data));
  return item;
}

export async function addList(item) {
  let data = JSON.parse((await AsyncStorage.getItem('codes')) || '[]');
  data = [...data, {_id: Date.now(), ...item}];
  await AsyncStorage.setItem('codes', JSON.stringify(data));
  return item;
}
export async function deleteList(item) {
  let data = JSON.parse((await AsyncStorage.getItem('codes')) || '[]');
  data = data.filter(_it => _it._id !== item._id);
  await AsyncStorage.setItem('codes', JSON.stringify(data));
  return true;
}