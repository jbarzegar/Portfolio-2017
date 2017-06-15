import { State } from 'jumpstate';

export default State({
    initial: {
        open: true
    },
    // Actions
    hideLoader() {
        return {
            open: false
        };
    },
    showLoader() {
        return {
            open: true
        };
    }
});
