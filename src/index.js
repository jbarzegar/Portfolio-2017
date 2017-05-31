import { h, render } from 'preact';
// Redux
import { Provider } from 'preact-redux';
import store from './store/';
// Polyfills
import 'promise-polyfill';
// import 'isomorphic-fetch';
// Styles
import './style';
// Router
import Router from './components/app';

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV==='production') {
    require('./pwa');
}

render(<Provider store={store}><Router /></Provider>, document.body);
