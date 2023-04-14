import React, {useContext, useState, useEffect} from "react";
import { ReactReduxContext, useSelector, useDispatch } from "react-redux";
import BookCard from '../BookCard';

export default function ShowResults() {
  const state = useSelector(state => state);

  return (
    <div className="container">
      <h1 className="text-center mx-4 my-5">{}</h1>
      <div className="books-container container d-flex flex-wrap justify-content-center">
        {
          state.allbooks && state.allbooks.map((book, index) => (
            <BookCard 
              book={book}
              key={index}
              />
          ))
        }
      </div>
    </div>
  )
}