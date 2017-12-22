import  { combineReducers } from 'redux';


import {
  CREATE_ACCOUNT,
  CREATE_DEPOSIT,
  CREATE_WITHDRAW,
  CREATE_TRANSFER,
  SET_TRANSACTION_FILTER
} from './actions';


export default function accounts(state=[], action) {
  const reducers = {};


  reducers[CREATE_ACCOUNT] = () => {
    return [
      ...state,
      action.data
    ];
  };


  reducers[CREATE_DEPOSIT] = () => {
    return state.map((account) => {
      if (account.id === action.data.id) {
        return {
          ...account,
          value: account.value + action.data.value
        };
      }

      return account;
    });
  };


  reducers[CREATE_WITHDRAW] = () => {
    return state.map((account) => {
      if (account.id === action.data.id) {
        return {
          ...account,
          value: account.value - action.data.value
        };
      }

      return account;
    });
  };


  reducers[CREATE_TRANSFER] = () => {
    return state.map((account) => {
      if (account.id === action.data.accountToId) {
        return {
          ...account,
          value: account.value + action.data.value
        };
      }

      if (account.id === action.data.accountFromId) {
        return {
          ...account,
          value: account.value - action.data.value
        };
      }

      return account;
    });
  };


  let reduced = reducers[action.type];
  return reduced ? reduced() : state;
}


export function transactionFilters(state='SHOW_ALL', action) {
  const reducers = {};


  reducers[SET_TRANSACTION_FILTER] = () => action.data;


  let reduced = reducers[action.type];
  return reduced ? reduced() : state;
}


export const bankApp = combineReducers({
  accounts,
  transactionFilters
});













