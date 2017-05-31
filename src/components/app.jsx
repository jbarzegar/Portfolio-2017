import { h, Component } from 'preact';
import Router from 'preact-router';
// Provider
import CmsProvider from '../api/cms';
// Redux
import { Actions } from 'jumpstate';
import { connect } from 'preact-redux';
// Components
import Home from './Home/';
import WorkPiece from './WorkPiece';
import Nav from './Nav';
// Style
import styles from './App.scss';

class App extends Component {
    componentWillMount() {
        CmsProvider.getAllWork()
            .then(data => {
                const arr = {};
                data.forEach(el => {
                    arr[el.slug] = el;
                });
                Actions.set(arr);
            })
            .catch(err => err);
    }
    render() {
        return (
            <div className={styles.App}>
                <Nav />
                <Router>
                    <Home path='/' />
                    <WorkPiece path='/work/:name' />
                </Router>
            </div>
        );
    }
}

export default connect(state => state)(App);
