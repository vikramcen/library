import React, { useState, useEffect } from "react";
import FilterBar from "../components/FilterBar";
import FilterResults from "../components/FilterResults";

import api from "../api/index"
import { useDispatch } from "react-redux";
import {DB_BOOKS} from "../utils/action"


export default function Catalog({}) {
  const dispatch = useDispatch();
  const [filterText, setFilterText] = useState({search: "", genre: ""});

  useEffect(() => {

    api.getAllBooks().then((data) => {
      console.log(data.data.data.length)
      if(data.data.data && data.data.data.length > 0) {
        dispatch({
          type: DB_BOOKS,
          dbbooks: data.data.data
        });
      }
    })
  }, []);

  return (
    <div>
      <FilterBar
        filterText = {filterText}
        setFilterText = {setFilterText}
      />
      <FilterResults
        filterText = {filterText}
        setFilterText = {setFilterText}
      />
    </div>
  )
}