import React, {Component} from 'react';
import {Button, message} from 'antd'
import './App.less';

class App extends Component {
  show = () => {
    message.info("success!")
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.show}>Button</Button>
      </div>
    );
  }
}

export default App;