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
  const [width, setWidth] = useState(786);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10000000);
    fetch(`https://gist.githubusercontent.com/rajanbajaj/e3b6e787b9e8ee09d98a1954b9d2089d/raw/books.json?i=${randomNumber}`)
      .then((res) => res.json())
      .then((data) => {
        data.content = DOMPurify.sanitize(data.content);
        setPosts(data)
      });
  }, []);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  
  // Split the books into chunks of three
  const chunkSize = Math.ceil(books.length / 3);
  const chunks: Book[][] = width >= 768? books.reduce((acc: Book[][], _, i: number) => {
    if (i % chunkSize === 0) acc.push(books.slice(i, i + chunkSize));
    return acc;
  }, []) : [books];

  // Map over the chunks and wrap each chunk in a div
  const renderedPosts = chunks.map((chunk, index) => (
    <div className="md:w-[30%] mx-auto" key={index}>
      {chunk.map(book => (
        <div className="card w-[100%] bg-base-100 shadow-xl my-4" key={book.id}>
          <div className="card-body">
            <h2 className="card-title underline">{book.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: book.content }} />
            <div className="text-xs italic"><span className="float-right hover:not-italic">{book.author}</span><span className="float-left hover:not-italic">{book.date}</span></div>
          </div>
        </div>
      ))}
    </div>
  ));

  return (
    <div className='gap-4 md:flex md:flex-wrap'>
      {renderedPosts}
    </div>
  )
}

export default Books