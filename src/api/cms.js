/* global fetch  */
import constants from '../constants/';
const cms = {
    // Should get a single page
    getPage(slug) {
        return new Promise((resolve, reject) => {
            fetch(`${constants.PAGES_ENDPOINT}?slug=${slug}`)
                .then(resp => resp.json())
                .then(data => resolve(data[0]))
                .catch(err => reject(new Error(err)));
        });
    },
    getAllWork() {
        const endpoint = `${constants.POSTS_ENDPOINT}?categories=${constants.Category.WORK}`;
        return new Promise((resolve, reject) => {
            fetch(endpoint)
                .then(resp => resp.json())
                .then(data => resolve(data))
                .catch(err => reject(new Error(err)));
        });
    }
};

export default cms;
