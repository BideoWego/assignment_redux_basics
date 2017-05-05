import { combineReducers } from 'redux';


import {
  CREATE_ITEM,
  PURCHASE_ITEM,
  SET_PURCHASED_FILTER,
  SET_CATEGORY_FILTER,
  SET_SORT_BY_FIELD
} from './actions';


export default function items(state=[], action) {
  const reducers = {};


  reducers[CREATE_ITEM] = () => {
    return [
      ...state,
      action.data
    ];
  };


  reducers[PURCHASE_ITEM] = () => {
    return state.map((item) => {
      if (item.id === action.data) {
        return {
          ...item,
          purchased: true
        };
      }

      return item;
    });
  };


  let reduced = reducers[action.type];
  return reduced ? reduced() : state;
}


export function itemFilters(state='SHOW_ALL', action) {
  const reducers = {};


  reducers[SET_PURCHASED_FILTER] = () => action.data;
  reducers[SET_CATEGORY_FILTER] = () => action.data;


  let reduced = reducers[action.type];
  return reduced ? reduced() : state;
}



export function itemSorters(state='id', action) {
  const reducers = {};


  reducers[SET_SORT_BY_FIELD] = () => action.data;


  let reduced = reducers[action.type];
  return reduced ? reduced() : state;
}



export const groceryApp = combineReducers({
  items,
  itemFilters,
  itemSorters
});






