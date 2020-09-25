import $ from 'jquery';
import api from './api/api';
import handler from './handlers/handleFormSubmit.js';
import baseMain from './templates/baseMain';

async function main() {
    /*await api.getBookmarks();
    await api.addBookmark({title: 'amazon', url: 'https://www.amazon.com', desc: 'find anything', rating: 3});*/
    const startMsg = $('<p>Webpack is working!</p>');
    console.log('DOM is loaded');
    baseMain.renderBaseMain();
    handler.handleFormSubmit();
    console.log('handleFormSubmit is working');
    
    $('#root').append(startMsg);
}

$(main);