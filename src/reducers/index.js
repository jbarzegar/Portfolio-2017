import { combineReducers } from 'redux';
import WorkState from '../state/work';
import ScrollPositionState from '../state/scroll';

const reducers = {
    work: WorkState,
    scroll: ScrollPositionState
};

export default combineReducers(reducers);
