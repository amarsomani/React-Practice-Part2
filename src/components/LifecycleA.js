import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Vishwas'
        }
        console.log('LifeCycle constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle A getDerivedStateFromProps')
        return null;
    }
    
    // componentWillMount(){
    //     console.log(' LifeCycle A componentWillMount ')
    // }
    componentDidMount(){
        console.log('LifeCycle A componentDidMount')
        return null;
    }
    
    shouldComponentUpdate(){
        console.log('LifeCycle A shouldComponentUpdate')    
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifeCycle A getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('LifeCycle A componentDidUpdate');
    }

    changeState = () =>{
        this.setState({
            name : 'CodeVolution'
        })
    }
   
    render() {
        console.log('LifeCycle A render')  
        return (
            <div>
              {/* <button onClick = {this.changeState}>Change State</button> */}
              Lifecycle A
              {/* <LifecycleB/> */}
              
            </div>
            )
    }
}

export default LifecycleA
