import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
             count:0
        }
    }

    handleDecrement(){
        this.setState(prevState =>({
            count : prevState.count-1
        }))
    }

    handleIncrement(){
        this.setState(prevState=>({
            count : prevState.count+1
        }))
    }

    handleReset(){
        this.setState({
            count : 0
        }
        )
    }

    
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick ={this.handleDecrement}>-</button>
                <button onClick={this.handleReset}>Reset</button>
                <button onClick={this.handleIncrement}>+</button>

            </div>
        )
    }
}

export default Counter
