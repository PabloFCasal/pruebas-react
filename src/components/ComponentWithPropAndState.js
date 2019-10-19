import React,  {Component} from 'react';


export default class ComponentWithPropAndState extends Component {

    constructor () {
        super()
        this.state = {success: false};
        this.changeState();
    }

    changeState (){
        setTimeout( () => {
            this.setState({ success: !this.state.success})     
            this.changeState();
        }, 1000);
    }

    render () {

        return (

            <div>
                <p>Hi, my state is:</p>
                <p>{this.state.success? 'green':'red' }</p>
                <p>{this.state.success? 'Successful':'FAIL' }</p>

                
            </div>        

        )



    }
}