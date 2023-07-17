import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        const {count} = this.state;
        return (
            <div className="user-card">
                <p>Count: {count}</p>
                <button onClick={() => {
                    // Never Update State Variables Directly
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>+</button>
                <h2>Name: Aman</h2>
                <h3>Location: Chandigarh</h3>
                <h4>Contact: +91-9986163715</h4>
            </div>
        )
    }
}

export default UserClass;