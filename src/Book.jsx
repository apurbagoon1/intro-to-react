export default function Book({book}){
    console.log('book', book)
    return <p>Name: {book.name}, Price: {book.price}</p>
}