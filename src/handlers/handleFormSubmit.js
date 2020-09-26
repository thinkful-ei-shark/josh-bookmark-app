// this file handles the listener for any for submission on click of the #submit button. 
import $ from 'jquery';
import api from '../api/api';
import render from '../render';
import storage from '../store';
import delButton from './handleDeleteButton';


// grab data-bookmark-id attribute from an element by doing this 
// const bookmarkId = $()----.data('bookmarkId');
// function deleteItem() {
//     $('li button').on('click', function (e) {
//         e.preventDefault();
//         $(this).parent().data('bookmarkId');
//     });
// }

function handleFormSubmit() {
    $("form").on("click", "#submit", async (e) => {
            e.preventDefault();
            const title = $('#title');
            const url = $('#url-link');
            const desc = $('#desc');
            const rating = $('#rating');
            
            // console log to ensure the listener is working
            console.log('handleFormSubmit initiated');
            // declare variable for object that will be generated
            const data = {title: title.val(), url: url.val(), desc: desc.val(), rating: rating.val()};
             
            // validate your form data
            if (!data.desc || data.desc.trim() === '') {
                data.desc = null;
            }

            if (!data.rating || data.rating.trim() === '') {
                data.rating = null;
            }

            // Now push the API to the local store
            try {
                const bookmark = await api.addBookmark(data);
                // console.log('weee bookmark from api', bookmark);
                storage.addBookmarkToLocal(bookmark);
                // call my render
                return render();
            } catch(err) {
                console.log(err)
            }
            
            
        });

}




export default {
    handleFormSubmit,
    delButton
};