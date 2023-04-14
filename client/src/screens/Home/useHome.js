import { useGetBooksQuery } from '@apis/book/bookApi';

const useHome = () => {
  const { data: books = [] } = useGetBooksQuery();

  return { books };
};

export default useHome;
