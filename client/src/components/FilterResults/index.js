import React, {useContext, useState, useEffect} from "react";
import { ReactReduxContext, useSelector, useDispatch } from "react-redux";
import BookCard from '../BookCard';

export default function FilterResults({filterText, setFilterText}) {
  const state = useSelector(state => state);

  return (
    <div className="container">
      <h1 className="text-center mx-4 my-5">{}</h1>
      <div className="books-container container d-flex flex-wrap justify-content-center">
        {
          filterText.genre === ""
          ?
          state.dbbooks && state.dbbooks
          .filter(book => book.title.toLowerCase().includes(filterText.search.toLowerCase()))
          .map((book, index) => (
            <BookCard 
              book={book}
              key={index}
              />
          ))  
          :
          state.dbbooks && state.dbbooks
          .filter(book => book.title.toLowerCase().includes(filterText.search.toLowerCase()) && book.genre === filterText.genre)
          .map((book, index) => (
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
