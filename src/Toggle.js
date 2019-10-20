import React, { Component } from 'react',


export default class Toggle extends Component {

    constructor (){
        super ();
        this.state = {isToggleOn: true};
        this.handleClickBinded = this.handleClickBinded.bind(this);

    
    // Classic bindig. Using .bind at the constructor method

    handleClickBinded () {

        this.state(state => ({isToggleOn: !state.isToggleOn}));

    }



    }    
















}