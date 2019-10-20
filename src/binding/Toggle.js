import React, { Component } from 'react'
import { tsImportEqualsDeclaration } from '@babel/types';


export default class Toggle extends Component {

    constructor (){
        super ();
        this.state = {isToggleOn: true};
        this.handleClickBinded = this.handleClickBinded.bind(this);

    }
    // Classic bindig. Using .bind at the constructor method
        handleClickBinded () {

            this.state((state) => ({isToggleOn: !state.isToggleOn}));
    }    


    // Experimental way to binding
    handleClickClassProperty = () => {
        this.setState( state => ({
            isToggleOn: !this.isToggleOn
        }));
    }


    render (){

        return(

            <div>
                <h3>Simple binding</h3>
                <button onClick={this.handleClickBinded}>With binding</button>

                
                <h3>With event creation</h3>
                <button onClick={() => this.state.handleClickBinded()}>
                    With event creation </button>







            </div>







        ) 












    }







}