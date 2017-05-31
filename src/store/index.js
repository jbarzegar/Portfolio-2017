import { createStore, applyMiddleware } from 'redux';
import { CreateJumpstateMiddleware } from 'jumpstate';

import reducers from '../reducers/';

export default createStore(
    reducers,
     /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
    /* eslint-enable */
    applyMiddleware(
        CreateJumpstateMiddleware(),
    ),
);
