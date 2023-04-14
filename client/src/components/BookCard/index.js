import React from "react";

export default function BookCard({book}) {

  return (
    <div
    className="book-card card mx-auto mb-3 m-lg-2"
    style={{minWidth: '280px', maxWidth: '280px', minHeight: '200px'}}>
      <a href={`/books/${book.isbn}`}>
        <div 
          className="card-img-top d-flex justify-content-center align-items-center"
          style={{minHeight: '208px'}}>
          <img 
          className="card-image" 
          src={book.image ? book.image : `https://picsum.photos/128/193`} 
          alt="Card cap"
          />
        </div>
      </a>
      <div className="card-body">
        <h5 
          className="card-title book-title"
          style={{minHeight: '45px' }}>{book.title}</h5>
        <p className="card-text book-desc text-truncate">{book.description}</p>
      </div>
    </div>
)
}