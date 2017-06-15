/* global fetch  */
import constants from '../constants/';

// Set base urls
const pagesUrl = constants.PAGES_ENDPOINT;
const postsUrl = constants.POSTS_ENDPOINT;

const cms = {
    // Should get a single page
    getPage(slug) {
        return new Promise((resolve, reject) => {
            fetch(`${pagesUrl}?slug=${slug}`)
                .then(resp => resp.json())
                .then(data => resolve(data[0]))
                .catch(err => reject(new Error(err)));
        });
    },
    getAllWork() {
        const endpoint = `${postsUrl}?categories=${constants.Category.WORK}`;
        return new Promise((resolve, reject) => {
            fetch(endpoint)
                .then(resp => resp.json())
                .then(data => resolve(data))
                .catch(err => reject(new Error(err)));
        });
    },
    getPinnedWork() {
        const endpoint = `${postsUrl}?categories=${constants.Category.WORK}&per_page=2`;
        return new Promise((resolve, reject) => {
            fetch(endpoint)
                .then(resp => resp.json())
                .then(data => resolve(data))
                .catch(err => reject(new Error(err)));
        });
    },
    getAllPosts() {
        const endpoint = `${postsUrl}?categories=${constants.Category.NORMAL}`;
        return new Promise((resolve, reject) => {
            fetch(endpoint)
                .then(resp => resp.json())
                .then(data => resolve(data))
                .catch(err => reject(new Error(err)));
        });
    },
    getRecentBlogPosts() {
        const endpoint = `${postsUrl}?categories=${constants.Category.NORMAL}&per_page=2`;
        return new Promise((resolve, reject) => {
            fetch(endpoint)
                .then(resp => resp.json())
                .then(data => resolve(data))
                .catch(err => reject(new Error(err)));
        });
    }
};

export default cms;
