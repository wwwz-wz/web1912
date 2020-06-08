import React from 'react'

export default class Child1 extends React.Component{

    constructor(){
        super();
        this.state = {
            currentMsg:'我是child1'
        }
    }

    clickHandle(){
        this.props.emitHandle(this.state.currentMsg);
    }

    render(){
        return(
            <div>
                Child1:{ this.props.msg }
                <button onClick={ this.clickHandle.bind(this) }>send</button>
            </div>
        )
    }
}