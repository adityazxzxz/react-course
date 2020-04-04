import React from 'react'

class AddOption extends React.Component {
    state = {
        error:undefined
    }

    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return {
                error
            }
        })
        //mereset input cursor jadi kosong setelah add option
        if(!error){
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

export default AddOption;