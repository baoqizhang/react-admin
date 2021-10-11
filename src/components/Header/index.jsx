import React, {Component} from 'react';
import storageUtils from "../../storageUtils";

class Header extends Component {
  render() {
    const {username} = storageUtils.getUser()
    return (
      <div className="header">
        <p>{username}</p>
      </div>
    );
  }
}

export default Header;