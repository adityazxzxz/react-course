class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility:false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility:!prevState.visibility
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide content' : 'Show content'}
                </button>
                
                {this.state.visibility && (
                    <div>
                        <p>Hey, These are some details you can now see!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />,document.getElementById('app'))