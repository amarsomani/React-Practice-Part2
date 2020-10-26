import React, { Component } from 'react'
import RefWithClass from './RefWithClass';
class RefWithClassFocusInput extends Component {
    constructor(props) {
        super(props)
        
        this.componentRef = React.createRef()
    }

    clickHandler = () =>{
        this.componentRef.current.focusInput()
    }
    
    render() {
        return (
            <div>
               <RefWithClass ref={this.componentRef} />
               <button onClick={this.clickHandler}>Focus Input</button> <br/>
               Ref with classes
            </div>
        )
    }
}

export default RefWithClassFocusInput
