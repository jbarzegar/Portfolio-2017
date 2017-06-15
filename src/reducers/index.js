import { combineReducers } from 'redux';
import WorkState from '../state/work';
import PostsState from '../state/posts';
import ScrollPositionState from '../state/scroll';
import Sidebar from '../state/sidebar';
import Loader from '../state/loader';

const reducers = {
    work: WorkState,
    posts: PostsState,
    scroll: ScrollPositionState,
    sidebar: Sidebar,
    loader: Loader
};

export default combineReducers(reducers);
