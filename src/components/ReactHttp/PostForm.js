import React, { Component } from 'react'
import axios from 'axios';
export class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId : '',
            title : '',
            body : ''
        }
    }

    changeHandler = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = (e) =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(res => 
                {
                    console.log(res)
                })
            .catch(err => {
                console.log('error founded')
            })
    }
    
    render() {
        const {userId,title,body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="userId"  onChange={this.changeHandler}/><br/>
                    <input type="text" name="title" onChange={this.changeHandler}/><br/>
                    <input type="text" name="body"  onChange={this.changeHandler}/><br/>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default PostForm
