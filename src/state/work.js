import { State } from 'jumpstate';

export default State({
    initial: {},
    // Actions
    set(state, payload) {
        return payload;
    },
    clear() {
        return {};
    }
});
