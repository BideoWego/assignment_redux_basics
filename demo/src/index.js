import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


import { createStore } from 'redux';
import { puppiesApp } from './reducers';
import {
  createPuppy,
  adoptPuppy,
  updatePuppy,
  setAvailabilityFilter
} from './actions';


let store = createStore(puppiesApp);
let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log('Initial State', store.getState());


store.dispatch(createPuppy({
  name: 'Dude 1',
  breed: 'Dog',
  available: true
}));

store.dispatch(createPuppy({
  name: 'Dude 2',
  breed: 'Dog',
  available: true
}));

store.dispatch(createPuppy({
  name: 'Dude 3',
  breed: 'Dog',
  available: true
}));



store.dispatch(adoptPuppy(3));



store.dispatch(updatePuppy({
  id: 3,
  name: 'Foobar',
  breed: 'Puppy',
  available: false
}));


store.dispatch(setAvailabilityFilter('SHOW_ADOPTED'));


unsubscribe();



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
















