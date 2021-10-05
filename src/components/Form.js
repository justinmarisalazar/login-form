import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             password: ""
        }
    }

    usernameChangeHandler = e => {
        this.setState({
            username: e.target.value
        })
    }

    passwordChangeHandler = e => {
        this.setState({
            password: e.target.value
        })
    }

    submitHandler = e => {
        alert(`Welcome ${this.state.username}!`);
    }
    
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.usernameChangeHandler} />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.passwordChangeHandler} />
                </div>
                <button type="submit" value="login">Log In</button>
            </form>
        )
    }
}

export default Form
