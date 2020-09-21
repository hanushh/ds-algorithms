import React from 'react';



export default class Test extends React.Component {
    state = {

        testState: "test-state"
    }
    render() {

        return <div onClick={e => {
            this.setState((prevState) => {
                
                return {
                    testState: prevState.testState + "0"
                }
            })
        }

        }>Hello hanush Test {this.state.testState}</div>
    }
}