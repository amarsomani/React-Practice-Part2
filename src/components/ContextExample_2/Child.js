import React, { Component } from 'react'
import GrandChild from './GrandChild'
import UserContext from './UserContext'

export class Child extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
                Component Child context {this.context}
               <GrandChild/> 
            </div>
        )
    }
}

// Child.contextType = UserContext

export default Child
