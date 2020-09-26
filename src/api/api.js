import storage from '../store';
import handler from '../handlers/handleFormSubmit';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/josh/bookmarks'

async function getBookmarks() {
    try{
      const res =  await fetch(BASE_URL);
      const data = await res.json();
      return storage.apiReloadStore(data);
    } catch(err) {
        console.log(err);
    }
}

async function addBookmark(obj) {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj) 
        }); 
        const data = await res.json();
        console.log(data);
        return data;
    } catch(err) {
        console.log(err);
    }
}

function deleteBookmark() {
    try {
        itemId = handler.deleteItem();
        const res = await fetch(`${BASE_URL}/${itemId}`, {
            method: 'DELETE' 
        }); 
    } catch(err) {
        console.log(err);
    }
}

export default {
getBookmarks,
addBookmark,
deleteBookmark

};



