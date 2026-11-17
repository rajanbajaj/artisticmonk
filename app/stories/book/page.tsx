"use client"
import React, { useEffect, useState } from "react"
import DOMPurify from "isomorphic-dompurify";

interface Book {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
}

const Books = () => {
  const [books, setPosts] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10000000);
    setLoading(true);
    setError(null);
    fetch(`https://gist.githubusercontent.com/rajanbajaj/e3b6e787b9e8ee09d98a1954b9d2089d/raw/books.json?i=${randomNumber}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Could not load books (${res.status}).`);
        }
        return res.json();
      })
      .then((data) => {
        const list: Book[] = Array.isArray(data) ? data : [];
        setPosts(
          list.map((book) => ({
            ...book,
            content: DOMPurify.sanitize(book.content ?? ""),
          }))
        );
      })
      .catch(() => {
        setError("Book notes could not be loaded. Check your connection and try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" aria-busy="true" aria-label="Loading book notes">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div className="card w-full bg-base-100 shadow-xl" key={i}>
            <div className="card-body gap-3">
              <div className="skeleton h-6 w-2/3"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-1/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error" role="alert">
        <span>{error}</span>
        <button className="btn btn-sm" onClick={() => window.location.reload()}>
          Try again
        </button>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">No book notes yet</h2>
          <p className="text-base-content/70">New reading notes will appear here once published.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <div className="card w-full bg-base-100 shadow-xl" key={book.id}>
          <div className="card-body">
            <h2 className="card-title underline">{book.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: book.content }} />
            <div className="flex items-center justify-between text-xs italic">
              <span>{book.date}</span>
              <span>{book.author}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Books
