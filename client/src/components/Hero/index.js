import React, {useState, useEffect} from "react";
import bgImg from '../../assets/img/libimg.jpg'
import api from '../../api/index'
import gBookSearch from '../../utils/bookSearch'
import { Alert } from 'react-bootstrap';
import auth from "../../utils/auth";

export default function Hero({
    bookSearched, setBookSearched, searchHistory, setSearchHistory, searchText, setSearchText
  }) 
{
  const [showAlert, setShowAlert] = useState(false);
  
  const searchSubmit = async (e) => {
    e.preventDefault();
    const query = e.target[0].value;
    e.target[0].value = "";
    if(query || query.length > 0) {
      setSearchText(query);
      setSearchHistory(...searchHistory, query)
      const data = await gBookSearch.googleSearchHandler(query);
      if(data) {
        setBookSearched(data)
      } else {
        setShowAlert(true);
      }
    
  }
  }

  return(
    <div className="d-flex justify-content-center align-items-center hero-img" style={{backgroundImage: `url(${bgImg})`}}>
      <div className="search-container d-flex justify-content-center flex-column p-2 p-lg-4">
        <p className="highText">Search library database for availability</p>
        <form className="d-flex p-md-3 p-lg-0 " onSubmit={searchSubmit}>

          <div className="input-container d-flex">
            <input 
              className="form-control mr-sm-2 impForm" 
              name="search"
              type="search" 
              placeholder="Search books" 
              aria-label="Search" 
            />
          </div>
          <button className="btn btn-primary mx-2">Search</button>
        </form>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger' 
          className="alert-button my-2 mx-3 mx-lg-0">
              Oops! Not able to generate any results.. Please try again!
          </Alert>
        <div className="d-flex">
        </div>
      </div>
    </div>
  )
}