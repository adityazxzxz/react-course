class IndecisionApp extends React.Component {
    //constructor dengan bind agar fungsi diluar render bisa dipanggil
    //constructor dengan props berfungsi untuk memanggil scope diluar class dan diluar render class itu sendiri
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options:[]
        }

    }
    
    //dijalankan saat componen class ini dimounting
    componentDidMount(){
        //pakai try catch biar ada error handlingnya. kondisi dibawah ini agar tidak muncul error
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            this.setState(() => {
                return {
                    options:options
                }
            });
            console.log('componentnDidMount');
        }catch(e){

        }
        
    }

    //dijalankan saat componen class ini ada update entah props atau state
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json)
        }
        console.log('componenDidUpdate');
    }

    //dijalankan saat componen class ini diunmount / tidak lg dimunculkan
    componentWillUnmount(){
        console.log('componenDidUnmount');
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

    handleDeleteOption(itemToDelete){
        this.setState((prevState) => {
            return {
                options:prevState.options.filter((item) => {
                    return item !== itemToDelete;
                })
            }
        })
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            //cek apakah didalam array sudah ada value tersebut
            return 'This value already exists';
        }

        this.setState((prevState) => {
            //menggabungkan state array option sebelumnya dengan value baru
            return {
                options:prevState.options.concat(option)
            }
        })
    }

    render(){
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle}></Header>
                <Action 
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}></Action>
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}>
                </Options>
                <AddOption
                    handleAddOption={this.handleAddOption}></AddOption>
            </div>
        );
    }
}



//bila sebuah component hanya untuk merender saja (tidak ada function didalam) cukup menggunakan seperti dibawha ini, tanpa menggunakan class
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

//title header menggunakan default dibawah ini apa bila props kosong dari class indecision
Header.defaultProps = {
    title:'Indecision'
}



const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}>What should i do?</button>
        </div>
    );
}



const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption}></Option>)
            }
        </div>
    );
}


const Option = (props) => {
    return (
        <div>
        {props.optionText}
        <button onClick={(e) => {props.handleDeleteOption(props.optionText)}}>Remove</button>
        </div>
    );
}



class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error:undefined
        }
    }
    handleAddOption(e){
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

const jsx = (
    <div>
        <IndecisionApp></IndecisionApp>
    </div>
)

ReactDOM.render(jsx,document.getElementById('app'));