import React, { Component } from 'react'
import GrandChild from './GrandChild'

export class Child extends Component {
    render() {
        return (
            <div>
               <GrandChild/> 
            </div>
        )
    }
}

export default Child
