import React from "react";
import "./styles/room.css";

export class RoomView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomSelected: false
    };
  }

  selectRoom = () => {
    const roomID = this.props.roomDetails["pk"];
    const userToken = localStorage.getItem("ch-userToken");
    // GET request to Cubahaus API
    fetch(`https://cubahaus-api.herokuapp.com/rooms/${roomID}/select/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${userToken}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data.selected
          ? this.setState({ roomSelected: true })
          : this.setState({ roomSelected: false });
      });
  };

  render() {
    const { roomDetails, viewDashboard } = this.props;
    const { roomSelected } = this.state;
    console.log(roomDetails);
    const roomID = roomDetails["pk"];
    const house = roomDetails["house"];
    const kitchen = roomDetails["kitchen"];
    const bathroom = roomDetails["bathroom"];
    const images = roomDetails["images"];
    return (
      <div className="room">
        <div onClick={e => viewDashboard()} className="dashboard-btn">
          Return to dashboard
        </div>
        <h1>Room view (#{roomID})</h1>
        <p>{roomDetails["room_name"]}</p>
        <p>${roomDetails["room_price"]}/month</p>
        <hr />
        <h2>House details</h2>

        <p>Address: {house["address"]["address2"]}</p>
        <p>City: {house["address"]["city"]}</p>
        <p>community_type: {house["community_type"]}</p>
        <p>house_capacity : {house["house_capacity"]}</p>
        <p>Laundary : {house["house_laundary"]}</p>
        <p>community_type : {house["community_type"]}</p>

        <hr />

        <div
          onClick={e => this.selectRoom()}
          className="dashboard-btn"
          style={{
            backgroundColor: roomSelected ? "black" : "blue"
          }}
        >
          {roomSelected ? "Selected!" : "Select room"}
        </div>
      </div>
    );
  }
}
