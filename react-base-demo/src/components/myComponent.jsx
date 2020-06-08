import React from 'react'

export default class MyComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            msg:"你好，我是state状态"
        }

        this.clickHandle = this.clickHandle.bind(this);
    }

    clickHandle(e){
        this.setState({
            msg:'哈哈哈哈哈哈哈'
        })
    }

    render(){
        return (
        <div>
            <button onClick={ this.clickHandle }>修改数据1</button>
            <button onClick={ this.clickHandle }>修改数据2</button>
            <p>{ this.state.msg }</p>
        </div>
        )
    }
}