import React from 'react';

export default class ExpensesForm extends React.Component {
    state = {
        description:'',
        note:'',
        amount:''
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => {
            return {
                description
            }
        })
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => {
            return {
                note
            }
        })
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        // ^\d*(\.\d{0,2})?$ regex ini untuk filter angka dengan 2 desimal dibelakang
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(() => {
                return {
                    amount
                }
            })
        }
    }

    render(){
        return (
            <div>
                <form>
                    <input type="text" placeholder="Description" onChange={this.onDescriptionChange} autoFocus value={this.state.description}/>
                    <input type="text" onChange={this.onAmountChange} value={this.state.amount} placeholder="amount"/>
                    <textarea onChange={this.onNoteChange} placeholder="Add note (optional)"></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}


