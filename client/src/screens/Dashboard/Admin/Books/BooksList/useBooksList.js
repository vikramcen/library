import { useDeleteBookMutation, useGetBooksQuery } from '@apis/book/bookApi';
import { ROOT_PAGE_URL } from '@constants/navigator';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useBooksList = () => {
  const [books, setBooks] = useState([]);
  const { data = [] } = useGetBooksQuery();
  const [deleteBook, { data: deletedBook }] = useDeleteBookMutation();

  useEffect(() => {
    if (deletedBook?._id) {
      toast.success('Book deleted successfully');
      const updatedBooks = [...books].filter((item) => item?._id !== deletedBook?._id);
      setBooks(updatedBooks);
    }
  }, [deletedBook]);

  useEffect(() => {
    setBooks(data);
  }, [data]);

  const navigate = useNavigate();

  const onAddClick = () => {
    navigate(`${ROOT_PAGE_URL.MYACCOUNT}${ROOT_PAGE_URL.BOOKS}/post`);
  };

  const onDelete = (id) => {
    deleteBook(id);
  };

  return { books, onAddClick, onDelete };
};

export default useBooksList;
