import { json } from "body-parser";

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/josh/bookmarks'

async function getBookmarks() {
    try{
      const res =  await fetch(BASE_URL);
      const data = await res.json();
      console.log(data);
    } catch(err) {
        console.log(err);
    }
}

async function addBookmark({title, url, desc, rating, expanded}) {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, url, desc, rating, expanded}) 
        }); 
        const data = await res.json();
        console.log(data);
    } catch(err) {
        console.log(err);
    }
    
}

export default {
getBookmarks,
addBookmark
};



