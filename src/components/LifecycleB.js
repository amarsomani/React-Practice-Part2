import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Vishwas'
        }
        console.log('LifeCycle constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle B getDerivedStateFromProps')
        return null;
    }
    
    componentDidMount(){
        console.log('LifeCycle B componentDidMount')
        return null;
    }

    shouldComponentUpdate(){
        console.log('LifeCycle B shouldComponentUpdate')    
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifeCycle B getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('LifeCycle B componentDidUpdate');
    }
    
    render() {
        console.log('LifeCycle B render')  
        return (
            <div>
              Lifecycle B
            </div>
            )
    }
}

export default LifecycleB
