import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';


const store = configureStore();
store.dispatch(addExpense({description:'Water',amount:2000,createdAt:3000}));
store.dispatch(addExpense({description:'Gas',amount:5000,createdAt:4000}));

store.dispatch(setTextFilter('ga'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

ReactDOM.render(<AppRouter />,document.getElementById('app'));