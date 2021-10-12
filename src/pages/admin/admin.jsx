import React, {Component} from 'react';
import storageUtils from '../../storageUtils'
import {Redirect, Route, Switch} from "react-router-dom"
import {message} from 'antd'
import LeftNav from '../../components/Left-nav'
import Header from '../../components/Header'
import {Layout} from 'antd'
import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

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
          <Content style={{margin: 20, backgroundColor: '#fff'}}>
            <Switch>
              <Redirect from='/' exact to='/home'/>
              <Route path='/home' component={Home}/>
              <Route path='/category' component={Category}/>
              <Route path='/product' component={Product}/>
              <Route path='/user' component={User}/>
              <Route path='/role' component={Role}/>
              <Route path="/charts/bar" component={Bar}/>
              <Route path="/charts/pie" component={Pie}/>
              <Route path="/charts/line" component={Line}/>
            </Switch>
          </Content>
          <Footer style={{textAlign: 'center', color: '#cccccc'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;