import '../assets/less/index.less'
import v from '../assets/image/v.jpg'
import print from '../print'

document.body.appendChild((function() {
  const a = document.createElement("div")
  a.innerHTML = "test"
  const img = document.createElement("img")
  img.src = v
  a.appendChild(img)
  const btn = document.createElement("button")
  btn.innerHTML = "print"
  btn.onclick = print
  a.appendChild(btn)
  return a
})())

if (module.hot) {
  module.hot.accept('../print.js', function() {
    console.log('Accepting the updated print module!');
    print();
  })
}