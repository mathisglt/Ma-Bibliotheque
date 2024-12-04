import React, { useState } from 'react';
import './BookList.css';

interface BookListProps {
  books: { title: string; author: string; genre: string; rating?: number }[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  const [bookList, setBookList] = useState(books);
  const [newBook, setNewBook] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState<number | ''>('');

  const addBook = () => {
    if (newBook.trim() && author.trim()) {
      const newBookData = {
        title: newBook,
        author,
        genre,
        rating: rating ? parseFloat(rating.toString()) : undefined,
      };
      setBookList([...bookList, newBookData]);
      setNewBook('');
      setAuthor('');
      setGenre('');
      setRating('');
    }
  };

  const removeBook = (index: number) => {
    const updatedList = bookList.filter((_, i) => i !== index);
    setBookList(updatedList);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addBook();
    }
  };

  return (
    <div className="book-list-container">
      <h1>📚 Ma Collection de Livres</h1>
      <div className="add-book-container">
        <input
          type="text"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Titre du livre"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Auteur"
        />
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Genre (Facultatif)"
        />
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value === '' ? '' : parseInt(e.target.value, 10))}
          aria-label="Note du livre"
        >
          <option value="">Note (0-10)</option>
          {[...Array(11)].map((_, i) => (
            <option key={i} value={i}>{i} ⭐</option>
          ))}
        </select>
        <button className="add-button" onClick={addBook}>Ajouter un livre</button>
      </div>

      <ul className="book-list">
        {bookList.map((book, index) => (
          <li key={index} className="book-item">
            <div className="book-details">
              <h3>{book.title}</h3>
              <p><strong>Auteur :</strong> {book.author}</p>
              {book.genre && <p><strong>Genre :</strong> {book.genre}</p>}
              {book.rating !== undefined && (
                <p><strong>Note :</strong> {book.rating} ⭐</p>
              )}
            </div>
            <button onClick={() => removeBook(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
