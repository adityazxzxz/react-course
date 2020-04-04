import React from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'

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

















export default IndecisionApp;