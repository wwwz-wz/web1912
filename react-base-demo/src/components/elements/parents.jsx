import React from 'react'
import Child1 from './child1'
import Child2 from './child2'

export default class Parents extends React.Component{

    constructor(){
        super();
        this.state = {
            data:''
        }
    }

    getHandle(data){
        this.setState({
            data:data
        })
    }

    render(){
        return(
            <div>
                <Child1 msg="消息1" emitHandle={ this.getHandle.bind(this) } />
                <Child2 msg='消息2' data={ this.state.data } />
            </div>
        )
    }

}