import React, { Component } from 'react';


export default class ErrorButton extends Component {
    state = {
        hasError: false
    }

    render() {
        console.log('render');
        if (this.state.hasError) {
            this.foo.bar = 0;
        }
        return (
            <button 
                className="btn btn-danger" 
                onClick={() => this.setState({hasError: true})}>
                Crash
            </button>
        )
    }
}