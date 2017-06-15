import { Effect, Actions } from 'jumpstate';
import CmsProvider from '../api/cms';

export default Effect('getAllData', () => {
    CmsProvider.getAllWork()
    .then(data => {
        const arr = {};
        data.forEach(el => arr[el.slug] = el);
        Actions.set(arr);
    })
    .then(() => CmsProvider.getAllPosts())
    .then(data => {
        const arr = {};
        data.forEach(el => arr[el.slug] = el);
        Actions.setPosts(arr);
    })
    .then(() => setTimeout(() => Actions.hideLoader(), 500))
    .catch(err => err);
});
