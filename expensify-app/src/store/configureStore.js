import { createStore, combineReducers } from 'redux';

const store = createStore(
    combineReducers({
        expenses:exspensesReducer,
        filters:filtersReducer
    })
)