import { combineReducers } from 'redux';


import {
  CREATE_PUPPY,
  ADOPT_PUPPY,
  UPDATE_PUPPY,
  SET_AVAILABILITY_FILTER
} from './actions';


export default function puppies(state=[], action) {
  const reducers = {};


  reducers[CREATE_PUPPY] = () => {
    return [
      ...state,
      action.data
    ];
  };


  reducers[ADOPT_PUPPY] = () => {
    return state.map((puppy) => {
      if (puppy.id === action.data) {
        return {
          ...puppy,
          available: false
        };
      }

      return puppy;
    });
  };


  reducers[UPDATE_PUPPY] = () => {
    return state.map((puppy) => {
      if (puppy.id === action.data.id) {
        return action.data;
      }

      return puppy;
    });
  };


  let reduced = reducers[action.type];
  return reduced ? reduced() : state;
}


export function puppyFilters(state='SHOW_ALL', action) {
  const reducers = {};


  reducers[SET_AVAILABILITY_FILTER] = action.data;


  let reduced = reducers[action.type];
  return reduced ? reduced : state;
}


export const puppiesApp = combineReducers({
  puppies,
  puppyFilters
});









