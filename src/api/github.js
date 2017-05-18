/* global fetch */

// Configure url
const baseApiEndpoint = 'https://api.github.com';
const user = 'jbarzegar';

// Use a bunch of object methods
const Github = {
    getUserRepos() {
        const params='?sort=pushed&per_page=6';
        const requestURL = `${baseApiEndpoint}/users/${user}/repos${params}`;
        return new Promise((resolve, reject) => {
            fetch(requestURL)
                .then(resp => resp.json())
                .then(data => resolve(data))
                .catch(err => reject(new Error(err)));
        });
    }
};

export default Github;
