import React from 'react'

export default class ComponentLifeCycle extends React.Component{

    constructor(){
        super();
        this.state = {
            msg: "Hello React"
        };
        console.log("挂载阶段 -> constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("更新阶段 -> getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(){
        console.log("更新阶段 -> shouldComponentUpdate");
        return true;
    }

    clickHandle(){
        this.setState({
            msg: '哈哈哈哈哈哈'
        })
    }

    render(){
        console.log("更新阶段 -> render");
        return(
            <div>
                <button onClick={ this.clickHandle.bind(this) }>修改</button>
                生命周期函数：<p>{ this.state.msg }</p>
            </div>
        )
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("更新阶段 -> getSnapshotBeforeUpdate");
        return null;
    }

    componentDidMount(){
        console.log("挂载阶段 -> componentDidMount");
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("更新阶段 -> componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("卸载阶段 -> componentWillUnmount");
    }
}