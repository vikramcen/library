import { useGetBooksQuery } from '@apis/book/bookApi';
import { useGetCategoriesQuery } from '@apis/category/categoryApi';
import { useState } from 'react';

const usePublicBooks = () => {
  const [category, setCategory] = useState('');
  // get keyword from url
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const keyword = urlParams.get('keyword');

  const { data: books = [], refetch } = useGetBooksQuery({ category, keyword });
  const { data: categories = [] } = useGetCategoriesQuery();

  const onClickCategory = (name) => {
    if (category === name) {
      setCategory('');
      refetch();
      return;
    }
    setCategory(name);
    refetch();
  };

  return { books, categories, onClickCategory, category };
};

export default usePublicBooks;
