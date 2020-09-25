// this file handles the listener for any for submission on click of the #submit button. 
import $ from 'jquery';
import api from '../api/api';
import storage from '../store';

function handleFormSubmit() {
    $("form").on("click", "#submit", (e) => {
            e.preventDefault();
            // console log to ensure the listener is working
            console.log('handleFormSubmit initiated');
            // declare variable for object that will be generated
            let data = {title: $('#title').val(), url: $('#url').val(), desc: $('#desc').val(), rating: $('#rating').val(), expanded: false};
            // below, push the form inputs to the object, individually os as to create the different properties within the object
            storage.store.bookmarks.push(data);
            console.log(storage.store);  
            // Now push the local store to the API
            console.log('calling addBookmark');
            api.addBookmark(data);
            
        });

}


export default {
    handleFormSubmit
};