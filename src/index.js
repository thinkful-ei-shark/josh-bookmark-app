import $ from 'jquery';
import api from './api/api';
import handler from './handlers/handleFormSubmit.js';
import storage from './store';
import render from './render';
import delButton from './handlers/handleDeleteButton';

async function main() {
    // Before my APP loads I want to fetch all the data from the bookmarks API because
    // my appication relies on it.
    await api.getBookmarks();
    // await api.deleteBookmark();
    
    // console.log('this is being consoled from my index.js', storage.store);
    // After I have all my data I can start rending the DOM because certain parts of my 
    // website rely on the bookmarks data.
    render();

    // After I render my UI I want to attach all my event listeners
    console.log('DOM is loaded');

    

    // attach event handlers
    await delButton();
    handler.handleFormSubmit();
    // handler.deleteItem();
}

$(main);