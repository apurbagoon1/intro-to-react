import Book from './Book';

export default function Library({ books }) {
    return (
        <div>
            <h2>My Central Library</h2>
            <h4>Book Collection: {books.length}</h4>
            <h5>Address: </h5>

            {
                books.map(book => <Book key={book.id} book={book}></Book>)
            }

        </div>
    )
}