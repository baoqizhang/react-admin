import React, {Component} from 'react';
import storageUtils from '../../storageUtils'
import {Redirect} from "react-router-dom";
import {message} from "antd";

class Admin extends Component {
  render() {
    const user = storageUtils.getUser()
    if(!user || !user._id) {
      message.error('用户未登录')
      return <Redirect to='/login'/>
    }
    return (
      <div>
        <h1>admin</h1>
      </div>
    );
  }
}

export default Admin;