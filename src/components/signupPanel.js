import React from 'react';
import './styles/signupPanel.css';

export class RegisterPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
      password1: "",
      password2: ""
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
      password1Error: false,
      password2Error: false
    });
  }


  handleSubmit = (e) => {
  	e.preventDefault();
    const { handleSignup } = this.props;
  	const { username, email, password1, password2 } = this.state;
  	if (username === "") { this.setState({ usernameError: true }) }
    else if (email === "") { this.setState({ emailError: true }) }
    else if (password1 === "" || password1.length < 8) { this.setState({ password1Error: true }) }
    else if (password2 !== password1) { this.setState({ password2Error: true }) }
    else {
      handleSignup(username, email,  password1, password2);
    }
  }


	render() {
		const { closeRegisterPanel } = this.props;
		const { usernameError, emailError, password1Error, password2Error } = this.state;

		return (
			<form className="registerPanel">
				<div className="registerPanel-topRow">
					<h1 className="registerPanel-title">
						Create a new Cubahaus account
					</h1>
					<i
						onClick={e => closeRegisterPanel()}
						className="fas fa-times registerPanel-closeBtn">
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
          { usernameError && "Please enter a username" }
        </p>

        { /* Email field */ }
        <input
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.handleInputChange}
          placeholder="Email"
          className="formInput"
        />
        <p id="emailErrorMsg" className="errorMsg">
          { emailError && "Please enter an email" }
        </p>

        { /* Password1 field */ }
        <input
          name="password1"
          type="password"
          value={this.state.password1}
          onChange={this.handleInputChange}
          placeholder="Enter Password"
          className="formInput"
        />
        <p id="password1ErrorMsg" className="errorMsg">
          { password1Error && "Please enter a password that is at least 8 characters long" }
        </p>

          { /* Password2 field */ }
        <input
          name="password2"
          type="password"
          value={this.state.password2}
          onChange={this.handleInputChange}
          placeholder="Confirm Password"
          className="formInput"
        />
        <p id="password2ErrorMsg" className="errorMsg">
          { password2Error && "Passwords must exactly match" }
        </p>



        { /* Submit button */ }
        <button onClick={e => this.handleSubmit(e)} className="formSubmitBtn">
          <i className="fas fa-sign-in-alt"></i>
          &nbsp;
          Sign up!
        </button>
			</form>
		)
	}
}