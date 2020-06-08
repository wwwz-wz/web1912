import React from 'react'

export default class FormComponentRef extends React.Component{

    constructor(){
        super();
        this.state = {
            currentUserName:'',
            currentPassword:''
        }
        this.username = React.createRef();
        this.password = React.createRef();
    }

    getInputHandle(){
        this.setState({
            currentUserName:this.username.current.value,
            currentPassword:this.password.current.value
        })
    }

    render(){
        const {currentUserName,currentPassword} = this.state;
        return(
            <div>
                <input type="text" ref={ this.username } />
                <input type="text" ref={ this.password } />
        <p>账号：{ currentUserName },密码：{ currentPassword }</p>
        <button onClick={this.getInputHandle.bind(this)}>点击按钮</button>
            </div>
        )
    }
}