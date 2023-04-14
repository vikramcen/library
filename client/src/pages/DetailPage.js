import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import {ALL_BOOKS, DB_BOOKS} from "../utils/action"

import api from "../api/index"
import gBookSearch from '../utils/bookSearch';

export default function DetailPage() {
  const { isbn } = useParams();
  const state = useSelector(state => state);

  const [bookSelected, setBookSelected] = useState({});
  const [dbData, setDbData] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const gBooks = JSON.parse(localStorage.getItem("books") || "[]");
    setErr(false)
    let index = gBooks.findIndex(b => b.isbn === isbn);
    if (index >= 0) {
      setBookSelected(gBooks[index])
      setDbData(false);
    }
    else {
      api.getAllBooks().then((data) => {
        if(data.data.data && data.data.data.length > 0) {
          let i = data.data.data.findIndex(b => b.isbn === isbn)
          setBookSelected(data.data.data[i]);
          setDbData(true);
        }
        else {
          setErr(true)
        }
      })      
    }
    
  }, []);

  return(
    <div className="container">
      <h2 className="text-center mx-4 my-5">{bookSelected.title}</h2>
      <div className="d-flex flex-wrap justify-content-center">
        <div >
          <img src={bookSelected.image} alt="..." className="img-thumbnail imgCus" />
        </div>
        <div className="dataBox">
          <p><b>Title : </b>{bookSelected.title}</p>
          <p><b>Author : </b>{bookSelected.author}</p>
          <p><b>ISBN : </b>{bookSelected.isbn}</p>
          <p><b>Genre : </b>{bookSelected.genre}</p>
          <p><b>Published : </b>{bookSelected.publishedDate}</p>
          <p><b>Price : </b>${bookSelected.price}</p>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="dataBox ">
          <p className="descBox"><b>Description : </b></p>
        </div>
        <div>
          <p className="descBox">{bookSelected.description}</p>
        </div>
      </div>
    </div>
  )
}