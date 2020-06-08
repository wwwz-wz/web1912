import React from 'react'

export default class Child2 extends React.Component{
    render(){
        return(
            <div>
                Child2:{ this.props.msg } - { this.props.data }
            </div>
        )
    }
}