import React from 'react'

export default class FormComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            search: "morenzhi"
        }
    }

    changeSearchValue(e){
        // 修改数据
        this.setState({
            search: e.target.value
        })
    }

    render(){
        const { search } = this.state;
        return(
            <div>
                <input type="text" value={ search } onChange={ this.changeSearchValue.bind(this) } />
                <p>{ search }</p>
            </div>
        )
    }
}