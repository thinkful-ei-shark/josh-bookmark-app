import $ from 'jquery';
import api from '../api/api';
import render from '../render';

async function handleDeleteButton(){
    $("li").on("click", "#delete", function (e) {
        e.preventDefault();
        console.log('this button was clicked');
        let id = $(this).parent().data('bookmarkId');
        console.log(id);
        api.deleteBookmark(id)
            .then((res) => {
                api.getBookmarks();
            });
            return render(res);
            
    });
}

export default handleDeleteButton;