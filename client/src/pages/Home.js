import React, { useState, useEffect } from "react";
import sb from "../utils/bookSearch";
import { useSelector, useDispatch } from "react-redux";
import {ALL_BOOKS, DB_BOOKS} from "../utils/action"

import Hero from "../components/Hero";
import ShowResults from "../components/ShowResults";
import gBookSearch from '../utils/bookSearch';
import api from "../api/index"

export default function Home({
  searchText, setSearchText, bookSearched, setBookSearched
}) {

  const state = useSelector(state => state);

  const dispatch = useDispatch();
  //const [bookSearched, setBookSearched] = useState([]);

  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    if(searchText !== "") {
      gBookSearch.googleSearchHandler(searchText).then(data => {
        setBookSearched(data);
      });
    }

    api.getAllBooks().then((data) => {
      console.log(data.data.data.length)
      if(data.data.data && data.data.data.length > 0) {
        dispatch({
          type: DB_BOOKS,
          dbbooks: data.data.data
        });
      }
    })

    console.log(state)
  }, []);
 
  useEffect(() => {
    if(bookSearched && bookSearched.length > 0) {
      dispatch({
        type: ALL_BOOKS,
        allbooks: bookSearched
      });
    }
    console.log(bookSearched)
    //console.log(searchText, bookSearched)
  }, [bookSearched]);

  return (
    <div>
      <Hero
        bookSearched = {bookSearched}
        setBookSearched = {setBookSearched}
        searchHistory = {searchHistory}
        setSearchHistory = {setSearchHistory}
        searchText = {searchText}
        setSearchText = {setSearchText}
      />
      {
        searchText === "Bestseller" ?
        <div className="mx-auto mb-3 m-lg-2 searchTitle d-flex justify-content-center">Bestseller books</div>
        :
        <div className="mx-auto mb-3 m-lg-2 searchTitle d-flex justify-content-center">Results for - {searchText}</div>
      }

      <ShowResults/>
    </div>
  )
}