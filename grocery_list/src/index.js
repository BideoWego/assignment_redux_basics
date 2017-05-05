import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';




import { createStore } from 'redux';
import { groceryApp } from './reducers';
import {
  createItem,
  purchaseItem,
  setPurchasedFilter,
  setCategoryFilter,
  setSortByField
} from './actions';


let store = createStore(groceryApp);
let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log('Initial State', store.getState());


store.dispatch(createItem({
  name: 'Item 1',
  description: 'A cool item',
  purchased: false,
  category: 'Foo'
}));

store.dispatch(createItem({
  name: 'Item 2',
  description: 'A awesome item',
  purchased: false,
  category: 'Foo'
}));

store.dispatch(createItem({
  name: 'Item 3',
  description: 'A gnarly item',
  purchased: false,
  category: 'Bar'
}));

store.dispatch(createItem({
  name: 'Item 4',
  description: 'A rad item',
  purchased: false,
  category: 'Foo'
}));


store.dispatch(purchaseItem(2));


store.dispatch(setPurchasedFilter('SHOW_ALL_PURCHASED'));
store.dispatch(setPurchasedFilter('SHOW_ALL_NOT_PURCHASED'));
store.dispatch(setCategoryFilter('SHOW_ALL_CATEGORIES'));
store.dispatch(setCategoryFilter('Foo'));


store.dispatch(setSortByField('name'));
store.dispatch(setSortByField('description'));


unsubscribe();




ReactDOM.render(
  <App />,
  document.getElementById('root')
);
















