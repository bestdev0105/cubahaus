import React from 'react';
import styled from 'styled-components';
import Description from '../../components/ContentDescription';
import email from '../../assets/bg_mail.svg';

const ImageWrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  text-align: center;
`;
class CheckEmail extends React.Component {
  onClickBackToLogin = () => {
    // this.props.history.block();
    this.props.history.location = {
      pathname: '/',
    };
    this.props.history.replace('/');
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ marginTop: '60px' }}>
          <h1>Check Your E-mail</h1>
          <Description style={{ width: '80%' }}>
            We have sent you an email with a link to reset your password.
            Please check your email and click the link to continue.
          </Description>
        </div>
        <ImageWrapper>
          <img
            src={email}
            alt="ForgotPassword Icon"
            style={{ width: '50%' }}
          />
        </ImageWrapper>
        <div className="bottomBtn valid" onClick={this.onClickBackToLogin}>
          <span>Back to Login</span>
        </div>
      </React.Fragment>
    );
  }
}

export default CheckEmail;
