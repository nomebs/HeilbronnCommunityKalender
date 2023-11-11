import React, { useState } from "react";

class LeftNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
    };
  }

  handleDropdownClick = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  render() {
    return (
      <div>
        <div className="HNcommunitynavlogo">
          <img src="/hncommunity_logo.jpg" alt="HN Community Logo" />
        </div>
        <div className="left-navbar separator">
          <ul>
            <li className="dropdown">
              <a
                href="#"
                className="dropbtn"
                onClick={this.handleDropdownClick}
              >
                Meine Communities
              </a>
              {this.state.isDropdownOpen && (
                <div className="dropdown-content">
                  <a href="#">Community 1</a>
                  <a href="#">Community 2</a>
                  <a href="#">Community 3</a>
                </div>
              )}
            </li>
            <li>
              <a href="#">Community Manager</a>
            </li>
            <li>
              <a href="#">Alle Communities</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LeftNavbar;
