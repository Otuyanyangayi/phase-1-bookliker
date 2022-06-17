document.addEventListener("DOMContentLoaded", function() {
    async function getBooks() {
         fetch('http://localhost:3000/books');
        return await resp.json();
        }
        function createBookLI(bookObject) {
            const liElement = document.createElement('li');
            liElement.textContent = bookObject.title;
            liElement.addEventListener("click",showBookDetails)
            return liElement;
            }
        
        function showBooksList(booksArray) {
            const LIContainer = document.getElementById('list');
            booksArray.forEach(bookObject => {
                const bookLI = createBookLI(bookObject);
                LIContainer.appendChild(bookLI);
                });
            };
        
        function showBookDetails(event) {
            alert(event.target.innerText);
            event.preventDefault()
            }
        
        getBooks().then(showBooksList);

});
