import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


import { createStore } from 'redux';
import { bankApp } from './reducers';
import {
  createAccount,
  createDeposit,
  createWithdraw,
  createTransfer,
  setTransactionFilter
} from './actions';


let store = createStore(bankApp);
let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log('Initial State', store.getState());


store.dispatch(createAccount({
  number: 1234,
  value: 1000,
  createdAt: new Date()
}));

store.dispatch(createAccount({
  number: 2345,
  value: 1000,
  createdAt: new Date()
}));

store.dispatch(createAccount({
  number: 3456,
  value: 1000,
  createdAt: new Date()
}));

store.dispatch(createAccount({
  number: 4567,
  value: 1000,
  createdAt: new Date()
}));


store.dispatch(createDeposit({
  id: 1,
  value: 100
}));


store.dispatch(createWithdraw({
  id: 2,
  value: 100
}));


store.dispatch(createTransfer({
  accountFromId: 1,
  accountToId: 2,
  value: 100
}));


store.dispatch(setTransactionFilter({
  startDate: new Date(1999, 0, 1),
  endDate: new Date(2017, 0, 1)
}));


unsubscribe();




ReactDOM.render(
  <App />,
  document.getElementById('root')
);















