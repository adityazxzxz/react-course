import React from 'react';

const ExpensesListItem = ({ description, amount }) => {
    return (
        <div>
            <p>{description} - {amount}</p>
        </div>
    )
}

export default ExpensesListItem;