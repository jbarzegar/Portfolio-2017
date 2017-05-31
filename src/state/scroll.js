import { State } from 'jumpstate';

export default State({
    initial: 0,
    saveScroll(state, payload) {
        return payload;
    },
    clearScoll() {
        return 0;
    }
});
