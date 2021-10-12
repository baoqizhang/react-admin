import React, {Component} from 'react';
import storageUtils from "../../storageUtils";
import "./index.less"
// import LinkButton from '../link-button'

class Header extends Component {
  render() {
    const {username} = storageUtils.getUser()
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎, {username}</span>
          {/*<LinkButton onClick={this.logout}>退出</LinkButton>*/}
        </div>
      </div>
    );
  }
}

export default Header;