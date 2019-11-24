import React from 'react';
// import './styles/profile.css';
import { UserProfileDetails } from '../components/userProfileDetails';
import { UserPasswordModify } from '../components/userPasswordModify';
// import { UserInfoRow } from '../components/userInfoRow';

export class ProfilePage extends React.Component {
	render() {
		const { viewDashboard } = this.props;

		// User details
		// const username = userDetails["username"];
		// const email = userDetails["email"];
		// const firstName = userDetails["first_name"] ? userDetails["first_name"] : "Not provided";
		// const lastName = userDetails["last_name"] ? userDetails["last_name"] : "Not provided";
		// const originCountry = userDetails["country_of_origin"] ? userDetails["country_of_origin"] : "Not provided";
		// const university = userDetails["university"] ? userDetails["university"] : "Not provided";
		// const aboutMe = userDetails["about_me"] ? userDetails["about_me"] : "Not provided";
		// const interests = userDetails["interests"] ? userDetails["interests"] : "Write a little bit about yourself :)";

		return (
			<div className="profilePage">
				<div
					onClick={e => viewDashboard()}
					className="dashboard-btn"
				>
					Return to dashboard
				</div>			
				<h1 className="profilePage-title">
					Profile
				</h1>
				<div className="profilePage-infoDisplay">
					{ /* "Username" */
						/*
						<UserInfoRow apiLabel="username" label="Username" data={username} getUserDetails={this.getUserDetails}/>
						*/
					}
					{ /* "Email" */
						/*
						<UserInfoRow apiLabel="email" label="Email" data={email} getUserDetails={this.getUserDetails}/>
						*/
					}				
					{ /* "First name" */
						/*
						<UserInfoRow apiLabel="first_name" label="First name" data={firstName} getUserDetails={this.getUserDetails}/>
						*/
					}					
					{ /* "Last name" */
						/*
						<UserInfoRow apiLabel="last_name" label="Last name" data={lastName} getUserDetails={this.getUserDetails}/>
						*/
					}				
					{ /* "Country of origin" */
						/*
						<UserInfoRow apiLabel="country_of_origin" label="Country of origin" data={originCountry} getUserDetails={this.getUserDetails}/>
						*/
					}
					{ /* "University" */
						/*
						<UserInfoRow apiLabel="university" label="University" data={university} getUserDetails={this.getUserDetails}/>
						*/
					}
					{ /* "About me" */
						/*
						<UserInfoRow apiLabel="about_me" label="About me" data={aboutMe} getUserDetails={this.getUserDetails}/>
						*/
					}
					{ /* "Interests" */
						/*
						<UserInfoRow apiLabel="interests" label="Interests" data={interests} getUserDetails={this.getUserDetails}/>
						*/
					}


					{ /* User's details */ }
					<UserProfileDetails />

					<hr/>

					{ /* Change password */ }
					<UserPasswordModify />
				</div>
			</div>
		)
	}
}