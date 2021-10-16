const baseUrl = 'https://localhost:44323/api/Book';

export function getBooks() {
    return fetch(baseUrl, { method: 'GET' })
        .then(res => res.json())
}

export function deleteBook(id) {
    return fetch(`${baseUrl}/deleteBook/${id}`, {
        method: 'DELETE'
    })
}