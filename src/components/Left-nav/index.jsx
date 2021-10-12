import React, {Component} from 'react';
import {Menu} from "antd";
import './index.less'
import {Link, withRouter} from "react-router-dom";
import menuList from "../../config/menuConfig"

const {SubMenu} = Menu;

class LeftNav extends Component {

  render() {
    this.menuNodes = this.getMenuNodes(menuList)
    let pathname = this.props.location.pathname;
    const openKey = this.openKey
    return (
      <div className='left-nav'>
        <Link to='/' className="left-nav-header">
          <h1>React管理后台</h1>
        </Link>
        <Menu
          theme='dark'
          defaultOpenKeys={[openKey]}
          selectedKeys={[pathname]}
          mode="inline"
        >
          {this.menuNodes}
        </Menu>
      </div>
    );
  }

  getMenuNodes(menuList) {
    let pathname = this.props.location.pathname;

    return menuList.map(item => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key} icon={React.createElement(require('@ant-design/icons')[item.icon])}>
            <Link to={item.key}>
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      } else {
        const cItem = item.children.find(cItem => pathname.indexOf(cItem.key)===0)
        // 如果存在, 说明当前item的子列表需要打开
        if (cItem) {
          this.openKey = item.key
        }
        return (
          <SubMenu key={item.key} icon={React.createElement(require('@ant-design/icons')[item.icon])}
                   title={item.title}>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
    })
  }
}

export default withRouter(LeftNav);