import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpensesListItem = ({ dispatch, id, description, amount, createdAt }) => {
    return (
        <div>
            <p>{description} - {amount} - {createdAt}</p>
            <button onClick={() => {
                dispatch(removeExpense({id}));
            }}>Remove</button>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        expenses:state.expenses
    }
}

export default connect(mapStateToProps)(ExpensesListItem);