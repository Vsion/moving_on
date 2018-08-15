import React from 'react';
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import Index from '../components/index'

const renderCom = App => {
  ReactDom.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app')
  );
}
renderCom(Index)

// if (module.hot) {
//   module.hot.accept('../print.js', function() {
//     console.log('Accepting the updated print module!')
//     print()
//   })
// }

if (module.hot) {
  module.hot.accept(
    '../components/index',() => {
      const nextUpload = require('../components/index').default; // eslint-disable-line global-require
      renderCom(nextUpload);
    }
  )
}