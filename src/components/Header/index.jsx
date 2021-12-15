import React, {Component} from 'react';
import storageUtils from "../../storageUtils";
import "./index.less"
import {formateDate} from "../../utils/dateUtils"
import {getWeather} from '../../api'

class Header extends Component {
  state = {
    currentTime: formateDate(Date.now()), // 当前时间字符串
    weather: '' // 天气的文本
  }

  getTime = () => {
    // 每隔1s获取当前时间, 并更新状态数据currentTime
    this.intervalId = setInterval(() => {
      const currentTime = formateDate(Date.now())
      this.setState({currentTime})
    }, 1000)
  }

  getWeather = async () => {
    let weather = await getWeather('510100')
    let {result} = weather
    this.setState({weather: result.now.text})
  }

  componentDidMount() {
    // 获取当前的时间
    this.getTime()
    // 获取当前天气
    this.getWeather()
  }

  /*
 当前组件卸载之前调用
  */
  componentWillUnmount () {
    // 清除定时器
    clearInterval(this.intervalId)
  }

  render() {
    const {weather,currentTime} = this.state
    const {username} = storageUtils.getUser()
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎, {username}</span>
          {/*<LinkButton onClick={this.logout}>退出</LinkButton>*/}
        </div>
        <div className="header-bottom">
          <span>{currentTime},{weather}</span>
        </div>
      </div>
    );
  }

}

export default Header;