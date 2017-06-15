import { h } from 'preact';
import { connect } from 'preact-redux';
import { Actions } from 'jumpstate';
import App from './components/app';
import Loader from './components/Loader';
import './effects/getAllData';

Actions.getAllData();

const Init = () => (
    <div className="App-container">
        <Loader />
        <App />
    </div>
);

export default connect(state => state)(Init);
