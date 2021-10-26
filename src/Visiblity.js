import React, { Component } from 'react'

export class Visiblity extends Component {
    constructor(props) {
        super(props)

        this.handleVisiblity = this.handleVisiblity.bind(this);

        this.state = {
             visiblity : false
        }
    }

    handleVisiblity(){
        this.setState((prevState)=>{
            visiblity = !(prevState.visiblity)
        })

        
    }
    
    render() {
        return (
            <div>
                <h1>Visiblity : {}</h1>
                <button onClick={this.handleVisiblity}>click</button>
            </div>
        )
    }
}

export default Visiblity
