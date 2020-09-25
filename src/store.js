import api from './api/api';
import render from './render';
import $ from 'jquery';
import handleFormSubmit from './handlers/handleFormSubmit';


const store = {bookmarks: []};
console.log(api.getBookmarks);

export default {
    store
};