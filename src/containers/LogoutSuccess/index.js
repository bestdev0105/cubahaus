import React from 'react';
import img_bye from '../../assets/goodbye.svg';
import './logoutSuccess.scss';

class LogoutSuccess extends React.Component {
  onClickBackToLogin = () => {
    this.props.history.replace('/');
  }

  render() {
    return (
      <React.Fragment>
        <div className="main">
          <div style={{ marginTop: "60px" }}>
            <h1>Good Bye!</h1>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src={img_bye} alt="Bye" style={{ margin: "0 auto", width: "64%", boxShadow: "0 16px 16px 0 #213aa2", borderRadius: "64vw" }}/>
          </div>
        </div>
        <div
          onClick={this.onClickBackToLogin}
          className={"bottomBtn valid-button"}
        >
          <div className="gap" />
          <span>Back to Login</span>
        </div>
      </React.Fragment>
    )
  }
}

export default LogoutSuccess;