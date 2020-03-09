class IndecisionApp extends React.Component {
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one','Thing two','Thing three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}></Header>
                <Action></Action>
                <Options options={options}></Options>
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
                <button>What should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        const options = this.props.options;
        return (
            <div>
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
    render() {
        return (
            <div>
                Add Options Here
            </div>
        );
    }
}

const jsx = (
    <div>
        <IndecisionApp></IndecisionApp>
    </div>
)

ReactDOM.render(jsx,document.getElementById('app'));