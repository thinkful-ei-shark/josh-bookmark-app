import $ from 'jquery';
import addBookmarkForm from './templates/addBookmarkForm';
import itemList from './templates/itemListTemplates';
import delButton from './handlers/handleDeleteButton';
import storage from './store';

async function render(html) {
    // html will be whatever template you set.
     $("main").html(html);
     delButton();
}

export default render;