// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {

    constructor(){
        super();
        this.state = {
            timesClicked: 0
        };
    };

    handleClick = () => {
        const newValue = this.state.timesClicked + 1;
        this.setState({
            timesClicked: newValue
        })
    }

    render(){
        return (
            <button
            onClick={this.handleClick}
            >{this.state.timesClicked}</button>
        )
    }
}