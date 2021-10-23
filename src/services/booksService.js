const baseUrl = 'https://localhost:5001/api/Book';

export function getBooks() {
    return fetch(baseUrl, { method: 'GET' })
        .then(res => res.json())
}

export function deleteBook(id) {
    return fetch(`${baseUrl}/deleteBook/${id}`, {
        method: 'DELETE'
    })
}

export function addBook(book) {
    return fetch(`${baseUrl}/addBook`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
}

export function getSingleBook(id) {
    return fetch(`${baseUrl}/getSingleBook/${id}`)
        .then(res => res.json())
} 

export function editBook(book) {
    return fetch(`${baseUrl}/editBook`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
}