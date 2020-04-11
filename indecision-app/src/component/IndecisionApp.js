import React from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = {
        options:[],
        selectedOption:undefined
    };
    
    //dijalankan saat componen class ini dimounting
    componentDidMount(){
        //pakai try catch biar ada error handlingnya. kondisi dibawah ini agar tidak muncul error
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => {
                    return {
                        options
                    }
                });
            }
            
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

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        //alert(option); 
        this.setState(() => ({
            selectedOption:option
        }))
    }

    handleCloseModal = () => {
        this.setState(() => ({selectedOption:undefined}))
    }

    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options:[]
            }
        });
    }

    handleDeleteOption = (itemToDelete) => {
        this.setState((prevState) => {
            return {
                options:prevState.options.filter((item) => {
                    return item !== itemToDelete;
                })
            }
        })
    }

    handleAddOption = (option) => {
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
                <Header subtitle={subtitle} title="Indecision App"></Header>
                <div className="container">
                <Action 
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}></Action>
                <div className="widget">
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}>
                </Options>
                <AddOption
                    handleAddOption={this.handleAddOption}>
                </AddOption>    
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}>
                </OptionModal>
                </div>
            </div>
        );
    }
}

export default IndecisionApp;










