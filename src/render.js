import $ from 'jquery';
import addBookmarkForm from './templates/addBookmarkForm';
import itemList from './templates/itemListTemplates';

async function render() {
    // html will be whatever template you set.
    $("main").html(`${addBookmarkForm()}${itemList()}`);
}

export default render;
