const store = {bookmarks: []}; 

// This adds the API bookmarks to my store when the application loads/reloads 
const apiReloadStore = (bookmarks) => {
    return bookmarks.forEach((bookmark) => store.bookmarks.push(bookmark));
}

// This adds a bookmark to my local store
const addBookmarkToLocal = (bookmark) => {
console.log('local store', store.bookmarks);
   return store.bookmarks.push(bookmark);
};

// Delete bookmark from local - aka `splice` it out ---find the local ID and splice it out.
const deleteBookmark = (idNum) => {
    for (let i = 0; i < store.bookmarks[i].length; i++) {
        if (store.bookmarks[i].id.val() === idNum) {
            const targetIndex = store.indexOf(bookmarks[i]);
            console.log(targetIndex, 'is the index of the target deletion');
            store.splice(targetIndex, 1);
        }
        return store.bookmarks;
    }
}
export default {
    store,
    addBookmarkToLocal,
    apiReloadStore,
    deleteBookmark
};