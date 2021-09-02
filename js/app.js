const getBooks = () => {
    const searchField = document.getElementById('input');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}

const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (docs == 0) {
        searchResult.textContent = 'no result found';
    }
    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =
            `<div class="card-group">
        <div class="card">
          <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
          <div class="card-footer">
         <div class="card-body">
         <h1 class="card-title text-success">${doc.title}</h1>
         <h3 class="card-text text-secondary">${doc.author_name}</h3>
         <h5>${doc.first_publish_year}</h5>
        </div>
          </div>
        </div>`;
        searchResult.appendChild(div);
    })
}
