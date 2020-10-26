import React, { Component } from 'react'

export class Form extends Component {

    state = {
        username : '',
        comments : '',
        topic : 'React'
    }

    usernameChangeHandler = (event) =>{
        this.setState({
            username : event.target.value
        });
    }

    commentsChangeHandler = (e) =>{
        this.setState({
            comments : e.target.value
        })
    }

    topicChangeHandler = (e) =>{
        this.setState({
            topic : e.target.value
        })
    }
    
    handleSubmit = (e) =>{
        alert(`${this.state.username} ${this.state.topic}`)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text"
                            value = {this.state.username} 
                            onChange = {this.usernameChangeHandler}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea 
                        value = {this.state.comments}
                        onChange = {this.commentsChangeHandler}    
                    />
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.topicChangeHandler}>
                        <option value="JavaScript">JavaScript</option>
                        <option value="node">Node</option>
                        <option value="React">React</option>
                    </select>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form
