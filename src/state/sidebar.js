import { State } from 'jumpstate';

export default State({
    initial: {
        isOpen: false,
        content: null
    },
    openSidebar(stat, payload) {
        return {
            isOpen: true,
            content: payload
        };
    },
    closeSidebar() {
        return {
            isOpen: false,
            content: null
        };
    }
});
