const formTemplate = function() {
    return `<form>
          <!-- All of the inputs: Title, URL, Desc(ription) & Rating. Submit button must also be included -->
          <label for="title">Title</label>
          <input type="text" id="title" placeholder="e.g. Amazon Wishlist" />
          <label for="url">Website</label>
          <input
            type="url"
            id="url-link"
            placeholder="e.g. https://www.Amazon.com"
          />
          <label for="desc">Description</label>
          <input type="text" id="desc" placeholder="e.g. My Wishlist" />
          <!-- Star rating would go here, but need to research how to do this. What input type? Need function and handler? Need to send as a number? -->
          <input type="number" id="rating" min="1" max="5" />
          <button type="submit" id="submit">Submit</button>
          <!-- Should receive appropriate feedback when I cannot submit a bookmark
          Check all validations in the API documentation (e.g. title and url field required) -->
        </form>`
  }
          
  
  export default formTemplate;