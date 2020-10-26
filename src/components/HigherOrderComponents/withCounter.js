import React from 'react';

const withCounter = (WrappedComponent, incrementNumber) => {


    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState((prevState, props) => {
                return { count: prevState.count + incrementNumber }
            })
        }

        render() {
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} />
        }
    }
    return NewComponent
}

export default withCounter