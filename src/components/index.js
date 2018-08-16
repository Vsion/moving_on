import React, { Component } from 'react'
import { Button } from 'antd'
import '../assets/less/index.less'
import v from '../assets/image/v.jpg'
import { print } from '../print'

class Index extends React.Component {
  state = {
    test: "test",
    count: 0,
  }
  onClick = () => {
    let { count, test } = this.state
    this.setState({
      count: ++count
    }, () => {
      print(test + count)
    })
  }
  render () {
    const { test, count } = this.state
    return (
      <div className="main">
        <Button onClick={this.onClick}>{test + count}</Button>
        <img src={v} />
        test
      </div>
    )
  }
}
export default Index