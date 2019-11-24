import React from 'react';
import './styles/loginPanel.css';

export class LoginPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: ""
		}
	}

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
      usernameError: false,
      emailError: false,
      passwordError: false
    });
  }


  handleSubmit = (e) => {
  	e.preventDefault();
  	const { username, email, password } = this.state;
  	// if (username === "") {
  	// 	this.setState({ usernameError: true })
  	// } else if (password === "") {
  	// 	this.setState({ passwordError: true })
  	// }

  	this.props.handleLogin(username, email, password);
  }


	render() {
		const { closeLoginPanel } = this.props;
		const { usernameError, emailError, passwordError } = this.state;

		return (
			<form className="loginPanel">
				<div className="loginPanel-topRow">
					<h1 className="loginPanel-title">
						Login
					</h1>
					<i
						onClick={e => closeLoginPanel()}
						className="fas fa-times loginPanel-closeBtn">
					</i>
				</div>
        { /* Username field */ }
        <input
          name="username"
          type="username"
          value={this.state.username}
          onChange={this.handleInputChange}
          placeholder="Username"
          className="formInput"
        />
        <p id="usernameErrorMsg" className="errorMsg">
          { usernameError && "Please enter your username" }
        </p>

        { /* Email field - Hidden for now */
          /*
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            placeholder="Email"
            className="formInput"
          />
          <p id="emailErrorMsg" className="errorMsg">
            { emailError && "Please enter your email" }
          </p>
          */
        }

        { /* Password field */ }
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleInputChange}
          placeholder="Password"
          className="formInput"
        />
        <p id="passwordErrorMsg" className="errorMsg">
          { passwordError && "Please enter your password" }
        </p>

        { /* Submit button */ }
        <button onClick={e => this.handleSubmit(e)} className="formSubmitBtn">
          <i className="fas fa-sign-in-alt"></i>
          &nbsp;
          Login
        </button>
			</form>
		)
	}
}