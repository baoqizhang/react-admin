import React, {Component} from 'react';
import {Menu} from "antd";
import {HomeOutlined, AppstoreOutlined, UserOutlined, BarsOutlined, ToolOutlined} from "@ant-design/icons";
import './index.less'
import {Link} from "react-router-dom";

const {SubMenu} = Menu;

class LeftNav extends Component {
  state = {
    current: '1',
  };

  render() {
    return (
      <div className='left-nav'>
        <Link to='/' className="left-nav-header">
          <h1>React管理后台</h1>
        </Link>
        <Menu
          theme='dark'
          onClick={this.handleClick}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <Menu.Item key="index" icon={<HomeOutlined/>}>
            首页
          </Menu.Item>
          <SubMenu key="product" icon={<AppstoreOutlined/>} title="商品">
            <Menu.Item key="ca" icon={<BarsOutlined />}>品类管理</Menu.Item>
            <Menu.Item key="pro" icon={<ToolOutlined />}>商品管理</Menu.Item>
          </SubMenu>
          <Menu.Item key="user" icon={<UserOutlined/>}>
            用户管理
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default LeftNav;