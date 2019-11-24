import React from 'react';
import './styles/dashboard.css';

export class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rooms: null
		}
	}

	componentWillMount() {
		this.getRoomsList();
		// this.getPDF();
	}


	getRoomsList = () => {
		// Get user credentials from localStorage
		const userToken = localStorage.getItem("ch-userToken");

		// GET request to Cubahaus API
		fetch("https://cubahaus-api.herokuapp.com/rooms/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `JWT ${userToken}`
			}
		}).then(response => response.json())
		.then(data => {
			console.log(data);
			this.setState({
				rooms: data
			})
		})
	}


	getPDF = () => {
		// Get user credentials from localStorage
		const userToken = localStorage.getItem("ch-userToken");

		// GET request to Cubahaus API
		fetch("https://cubahaus-api.herokuapp.com/render/pdf", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `JWT ${userToken}`
			}
		}).then(response => response.json())
		.then(data => {
			console.log(data);
		})
	}


	render() {
		const { viewRoom, viewProfile, handleLogout } = this.props;
		const { rooms } = this.state;
		if (rooms === null) { return "Loading data from the server..." }

		return (
			<div className="dashboard">
				<div className="dashboard-topRow">
					<div
						onClick={e => viewProfile()}
						className="dashboard-btn"
					>
						Profile
					</div>			
					<div
						onClick={e => handleLogout()}
						className="dashboard-btn"
					>
						Logout
					</div>
				</div>
				<h1>Dashboard</h1>
				<div>
					{	/* Generate list of all rooms */
						rooms.map((room) => {
							return (
								<div
									key={room["url"]}
									onClick={e => viewRoom(room["url"])}
									className="roomCard"
								>
									<p>{ room["room_name"] }</p>
									<p>${ room["room_price"] }/m</p>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}