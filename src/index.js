import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes/index.js';
// import { AppContainer as HotLoaderContainer } from 'react-hot-loader';
import Root from './components/Root/Root.jsx'

const rootEl = document.getElementById('root');

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

ReactDOM.render(
    <Root routes={routes} />,
  rootEl
);


// ReactDOM.render(
//   <HotLoaderContainer>
//     <Root routes={routes} />
//   </HotLoaderContainer>,
//   rootEl
// );

//Hot Module Reloading
// if (module.hot) {
//   module.hot.accept('./components/Root/Root.jsx', () => {
//     const NextRoot = require('./components/Root/Root.jsx').default;

//     ReactDOM.render(
//       <HotLoaderContainer>
//         <NextRoot routes={routes} />
//       </HotLoaderContainer>,
//       rootEl
//     );
//   })
// }
