
import React, { useState } from "react";
import { Alert } from 'react-bootstrap';
import api from '../api/index';
import { useNavigate } from 'react-router-dom';

export default function CreateBook() {
    let navigate = useNavigate()
  const [formState, setFormState ] = useState({title: '', author: '', isbn: '', genre: '', image: '', publishedDate: '', price: '' });
  const [showAlert, setShowAlert] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await api.createBook({
        title: formState.title, author: formState.author, isbn: formState.isbn, genre: formState.genre, description: formState.description,image: formState.image,
        publishedDate: formState.publishedDate, price: formState.price
      });
      setFormState({title: '', author: '', isbn: '', genre: '', description: '', image: '', publishedDate: '', price: '' });
      navigate('/catalog');
    } catch (e) {
      console.error(e);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({...formState, [name]: value});
  }

  return (
    <div className="body-container d-flex flex-column justify-content-center">
      <h2 class="display-4 mt-4 text-center">Create a Book</h2>
      <div className="auth-container d-flex flex-column container-sm">
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger' className="alert-button">
          Missing or incorrect information! Please try again.
        </Alert>
        <form onSubmit={handleSubmit} id="book-creation-form">
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title: </label>
            <input onChange={handleChange} name="title" className="form-control" type="text" id="title" value={formState.title} />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">Author: </label>
            <input onChange={handleChange} name="author" className="form-control" id="author" value={formState.author} type="text" />
          </div>
          <div className="mb-3">
            <label htmlFor="isbn" className="form-label">ISBN: </label>
            <input onChange={handleChange} name="isbn" className="form-control" type="text" id="isbn" value={formState.isbn} />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">Genre: </label>
            <input onChange={handleChange} name="genre" className="form-control" id="genre" value={formState.genre} type="text" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description: </label>
            <input onChange={handleChange} name="description" className="form-control" id="description" value={formState.description} type="text" />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image: </label>
            <input onChange={handleChange} name="image" className="form-control" type="text" id="image" value={formState.image} />
          </div>
          <div className="mb-3">
            <label htmlFor="publishedDate" className="form-label">Published Date: </label>
            <input onChange={handleChange} name="publishedDate" className="form-control" id="publishedDate" value={formState.publishedDate} type="date" />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price: </label>
            <input onChange={handleChange} name="price" className="form-control" type="text" id="price" value={formState.price} />
          </div>
          <button type="submit" className="btn btn-primary">Create Book</button>
        </form>
      </div>
    </div>
  )
}