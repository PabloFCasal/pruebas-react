import React, { Component } from 'react'


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


    render (){

        return(

            <div>
                <h3>Simple binding</h3>
                <button onClick={this.handleClickBinded}>With binding</button>










            </div>







        ) 












    }







}