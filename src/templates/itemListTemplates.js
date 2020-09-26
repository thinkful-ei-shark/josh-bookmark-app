import storage from '../store';

const itemList = () =>  {
    const { bookmarks } = storage.store;

    // if bookmarks is empty or the length is < 1 then we will return as part of the
    // first if statement. This stops further code form executing.
    if (!bookmarks || !bookmarks.length) {
        console.log('no bookmarks are in the API');
        // returning here stops all the code below this if statement from executing
        return;
    }

    let template = '';

    for (let i = 0; i < bookmarks.length; i++) {
        let bookmark = bookmarks[i];
        template += `<li data-bookmark-id=${bookmark.id}>
            <h3>${bookmark.title}</h3>
            <button id="delete">delete</button>
        </li>`;
    }

    

    return template;

    // let template = '';
    // for (let i = 0; i < storage.store.bookmarks.length; i++) {
    //     let currentTarget = storage.store.bookmarks[i];
    //     if ( currentTarget.expanded !== true) {
    //         template += `<li class="collapsed"><div id="tile-li">${currentTarget.title}</div><span id="rating-li">${currentTarget.rating}</span></li>`;
    //     }
    // }
    // return template;
}

export default itemList;