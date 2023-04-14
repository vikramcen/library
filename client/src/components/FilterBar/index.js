import React, {useState, useEffect} from "react";
import { Form } from "react-bootstrap";

export default function FilterBar({filterText, setFilterText}) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterText({...filterText, [name]: value});
  }

  const handleChange2 = (e) => {
    setFilterText({...filterText, "genre": e.target.value});    
  }

  return(
    <div className="d-flex justify-content-center align-items-center">
      <div className="search-container d-flex justify-content-center flex-column p-2 p-lg-4">
        <form className="d-flex p-md-3 p-lg-0 ">
          <div className="input-container d-flex">
            <input 
              className="form-control mr-sm-2 impForm" 
              name="search"
              type="search" 
              placeholder="Filter keywords" 
              aria-label="Search" 
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      
      <Form.Group controlId="formBasicSelect">
        <Form.Control
          as="select"
          onChange={handleChange2}
        >
          <option value="">Select Genre</option>
          <option value="fiction">Fiction</option>
          <option value="Biography">Biography</option>
          <option value="Children">Children</option>
        </Form.Control>
      </Form.Group>
    </div>
  )
}