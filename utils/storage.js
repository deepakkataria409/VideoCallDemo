import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = '@user_data';

export const storeUserData = async data => {
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(data));
};

export const getUserData = async () => {
  const json = await AsyncStorage.getItem(USER_KEY);
  return json ? JSON.parse(json) : null;
};

export const clearUserData = async () => {
  await AsyncStorage.removeItem(USER_KEY);
};
