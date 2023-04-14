import DashboardContentWrapper from '@components/DashboardContentWrapper/DashboardContentWrapper';
import React from 'react';
import useBooksList from './useBooksList';

const BooksList = () => {
  const { books, onAddClick, onDelete } = useBooksList();

  return (
    <DashboardContentWrapper title={'Books'} btn="Add Book" onBtnClick={onAddClick}>
      <div className="myaccount-table table-responsive text-center">
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th>#</th>
              <th>Book Image</th>
              <th>Book Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>In Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      className="w-20 mx-auto"
                      src={`${process.env.REACT_APP_SERVER_URL}${book?.bookImage}`}
                      alt="book"
                    />
                  </td>
                  <td>{book?.title}</td>
                  <td>${book?.price}</td>
                  <td>{book?.category}</td>
                  <td>{book?.stock}</td>
                  <td width={'20%'} align="center">
                    <span onClick={() => onDelete(book._id)} className="btn btn-sqr">
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
            {books.length === 0 && (
              <tr>
                <td colSpan={7}>No books found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DashboardContentWrapper>
  );
};

export default BooksList;
