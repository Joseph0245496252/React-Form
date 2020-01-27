import React, { Component } from 'react';

class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: ""

    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
        
    };

    onSubmit = e => {
        // e.preventDefult();
        console.log(this.state);
    }

    render() {
        return (

            <form onSubmit={this.onSubmit}>
                <input
                    name="firstName"
                    placeholder='Fist name'
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                />
                <br />

                <input
                    name="lastName"
                    placeholder='Last name'
                    value={this.state.lastName}
                    onChange={this.change}
                />
                <br />

                <input
                    name="username"
                    placeholder='Username'
                    value={this.state.usernamee}
                    onChange={this.change}
                />
                <br />


                <input
                    name="email"
                    placeholder='Email'
                    value={this.state.email}
                    onChange={this.change}
                />
                <br />

                <input
                    name="password"
                    type="password"
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.change}
                />
                <br />

                <input type="submit" value="submit" />

            </form>
        );
    }
}

export default Form;