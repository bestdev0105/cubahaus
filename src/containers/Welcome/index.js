import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import logo1 from "../../assets/fill-1.svg";
import house from "../../assets/house.svg";
import "./style.scss";

const ImageWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export default class WelcomePage extends React.Component {
  render() {
    return (
      <div>
        {/* <MobileView>
					<div className="container">
						<div className="content">
							<div className="title">
								<span>Welcome to</span>
								<br />
								<h1>Cubahaus</h1>
							</div>
							<ImageWrapper>
								<img src={logo} alt="Welcome Page Icon" style={{ width: "50vw" }} />
							</ImageWrapper>
							<div className="auth-button-container">
								<div className="auth-buttons">
									<Link to="/login" style={{ textDecoration: "none" }}>
										<div className="button login">Login</div>
									</Link>
									<Link to="/register" style={{ textDecoration: "none" }}>
										<div
											className="button"
											style={{
												color: "#bbc4e5",
												border: "solid 1px #bbc4e5"
											}}
										>
											Create account
									</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</MobileView>
				<BrowserView viewClassName="container" style={{ display: "flex", minWidth: "1024px" }}>
					<div style={{ display: "flex", margin: "auto", width: "78%", maxWidth: "1120px", height: "78%" }}>
						<div style={{ margin: "auto", float: "left", width: "40%", maxWidth: "480px", height: "100%", maxHeight: "800px", backgroundColor: "#3053e4", display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: "column" }}>
							<div>
								<img src={logo1} alt="Welcome Page Icon" style={{ width: "120px" }} />
							</div>
							<div style={{ marginTop: "100px" }}>
								<img src={house} alt="Welcome Page Icon" style={{ width: "320px" }} />
							</div>
						</div>
						<div style={{ float: "left", width: "60%", height: "100%", display: "flex", alignItems: "center" }}>
							<div style={{ marginLeft: "-40px", width: "100%", height: "60%", maxHeight: "420px", backgroundColor: "white", boxShadow: "0 12px 24px 0 rgba(42, 48, 73, 0.15)" }}>
								<div className="content" style={{ padding: 0, height: "100%", display: "flex", margin: "auto", flexDirection: "column", justifyContent: "center" }}>
									<div className="title">
										<span>Welcome to</span>
										<br />
										<h1>Cubahaus</h1>
									</div>
									<div className="auth-button-container" style={{ position: "static", marginTop: "50px" }}>
										<div className="auth-buttons">
											<Link to="/login" style={{ textDecoration: "none" }}>
												<div className="button login">Login</div>
											</Link>
											<Link to="/register" style={{ textDecoration: "none" }}>
												<div
													className="button"
													style={{
														color: "#bbc4e5",
														border: "solid 1px #bbc4e5"
													}}
												>
													Create account
											</div>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</BrowserView> */}
      </div>
    );
  }
}
