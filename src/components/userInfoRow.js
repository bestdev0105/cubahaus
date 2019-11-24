import React from 'react';
import './styles/userInfoRow.scss';

export class UserInfoRow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editData: false,
			inputData: this.props.data
		}
	}


	editData = () => {
		this.setState({ editData: true })
	}


	handleInputChange = (e) => {
		const value = e.target.value;
		this.setState({ inputData: value });
	}


	saveData = () => {
		const { apiLabel, getUserDetails } = this.props;
		const { inputData } = this.state;

		// Get user credentials from localStorage
		const userToken = localStorage.getItem("ch-userToken");
		const username = localStorage.getItem("ch-username");

		const patchObj = {
			username: username,
			[apiLabel]: inputData 
		}
		console.log(patchObj);

		// PATCH request to Cubahaus API
		fetch("https://cubahaus-api.herokuapp.com/accounts/user/", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `JWT ${userToken}`
			},
			body: JSON.stringify(patchObj)
		}).then(response => {
			console.log(response);
			this.setState({ editData: false });
			getUserDetails();
		})
	}


	render() {
		const { label, data } = this.props;
		const { editData, inputData } = this.state;

		return (
			<div className="userInfoRow">
				<h2 className="userInfoRow-label">
					{ label }
				</h2>
				
				{	/* On first render - Show user info with 'edit' button */
					!editData
					&&
					<div className="userInfoRow-dataDisplay">
						<p className="userInfoRow-data">
							{ data }
						</p>
						<div
							onClick={e => this.editData()}
							className="userInfoRow-btn"
							style={{
								backgroundColor: "blue"
							}}
						>
							<i className="fas fa-edit"></i>
						</div>
					</div>
				}

				{	/* Edit info - Show form field with 'save' button */
					editData
					&&
					<form className="userInfoRow-dataEdit">
						<input
							type="text"
							onChange={e => this.handleInputChange(e)}
							value={inputData}
							className=""
						/>
						<div
							onClick={e => this.saveData()}
							className="userInfoRow-btn"
							style={{
								backgroundColor: "green"
							}}
						>
							Save
						</div>						
					</form>
				}				
			</div>
		)
	}
}