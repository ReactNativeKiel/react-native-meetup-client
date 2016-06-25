import {
  AsyncStorage,
} from 'react-native';

const key = 'services/meetupLS/meetupName';

export function meetupName() {
  return AsyncStorage.getItem(key);
}

export function setMeetupName(name) {
 return AsyncStorage.setItem(key, name); 
}
