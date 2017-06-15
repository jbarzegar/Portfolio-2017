import { State } from 'jumpstate';

export default State({
    initial: {},
    // Actions
    setPosts(state, payload) {
        return payload;
    },
    clearPosts() {
        return {};
    }
});
