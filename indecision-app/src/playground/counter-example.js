class Counter extends React.Component{
    constructor(props){
        super(props);

        //bind dari onclick ke fungsi diluar render
        this.handleAddOnes = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count:0
        };
    }

    componentDidMount(){
        const rawCount = localStorage.getItem('count');
        const count = parseInt(rawCount, 10);
        if(!isNaN(count)){
            this.setState(() => {
                return {
                    count
                }
            })
        }
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }
    
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count:prevState.count + 1
            }
        })
        console.log('handle add one');
    }

    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count:prevState.count - 1
            }
        });
        console.log('handle minus one');
    }

    handleReset(){
        console.log('reset');
    }

    render(){
        return (
            <div>
                <h1>Counter : {this.state.count}</h1>
                <button onClick={this.handleAddOnes}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />,document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Counter : {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo,appRoot)
// }

// renderCounterApp();