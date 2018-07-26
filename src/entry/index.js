import React, { Component } from 'react'
import ReactDOM from "react-dom"

class Index extends React.Component {
  state = {
    content: "test"
  }
  render () {
    return (
      <div>
        {this.state.test}
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById("app"));
