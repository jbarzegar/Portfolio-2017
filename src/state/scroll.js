import { State } from 'jumpstate';

export default State({
    initial: {
        '/': 0,
        '/work': 0,
        '/resume': 0,
        '/blog': 0
    },
    saveScrollPos(state, payload) {
        console.log(payload);
        return payload;
    },
    clearScoll() {
        return 0;
    }
});
