import React, { Component } from 'react'
import { Button } from 'antd'
import '../assets/less/index.less'
import v from '../assets/image/v.jpg'
import { print } from '../print'

// document.body.appendChild((function() {
//   const a = document.createElement("div")
//   a.innerHTML = "test"
//   const img = document.createElement("img")
//   img.src = v
//   a.appendChild(img)
//   const btn = document.createElement("button")
//   btn.innerHTML = "print"
//   btn.onclick = print
//   a.appendChild(btn)
//   // const obj = [ { a: 1 }, { b: 1 } ]
//   // console.log(_.filter(obj, { a: 1 }))
//   return a
// })())

class Index extends React.Component {
  render () {
    return (
      <div className="main">
        <Button onClick={() => alert("test")} >test</Button>
        <img src={v} />
        test
      </div>
    )
  }
}
export default Index
// export default function a() {
//   console.log(123)
// }