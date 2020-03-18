class IndecisionApp extends React.Component {
    //constructor dengan bind agar fungsi diluar render bisa dipanggil
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options:['Think one','Think two','Think three']
        }

    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option); 
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options:[]
            }
        });
    }

    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle}></Header>
                <Action 
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}></Action>
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}>
                </Options>
                <AddOption></AddOption>
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        const title = this.props.title;
        const subtitle = this.props.subtitle;
        return (
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}>What should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    //note : konstruktor ini agar bisa akses props karena props hanya bisa diakses didalam fungsi render aja
    render() {
        const options = this.props.options;
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    options.map((option) => <Option key={option} optionText={option}></Option>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        const key = this.props.key;
        const text = this.props.optionText;
        return (
            <div>{text}</div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.option.value.trim();
        if(option){
            alert(option);
        }
    }
    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        );
    }
}

const jsx = (
    <div>
        <IndecisionApp></IndecisionApp>
    </div>
)

ReactDOM.render(jsx,document.getElementById('app'));