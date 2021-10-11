import React, {Component} from 'react';
import storageUtils from '../../storageUtils'
import {Redirect} from "react-router-dom";
import {message} from 'antd';
import LeftNav from '../../components/Left-nav'
import Header from '../../components/Header'
import {Layout} from 'antd';

const {Footer, Sider, Content} = Layout;

class Admin extends Component {
  render() {
    const user = storageUtils.getUser()
    if (!user || !user._id) {
      message.error('用户未登录')
      return <Redirect to='/login'/>
    }
    return (
      <Layout style={{height: '100%'}}>
        <Sider><LeftNav/></Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{margin: 20, backgroundColor: '#fff'}}>Content</Content>
          <Footer style={{textAlign: 'center', color: '#cccccc'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;