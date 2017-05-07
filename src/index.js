import { h, render } from 'preact';
// Polyfills
import 'promise-polyfill';
import 'isomorphic-fetch';
// Styles
import './style';
// Router
import Router from './components/app';

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV==='production') {
    require('./pwa');
}

render(<Router />, document.body);
