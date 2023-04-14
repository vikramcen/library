import { useCreateBookMutation } from '@apis/book/bookApi';
import { useGetCategoriesQuery } from '@apis/category/categoryApi';
import { ROOT_PAGE_URL } from '@constants/navigator';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from '@utils/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const usePostBooks = () => {
  const [create, { data }] = useCreateBookMutation();
  const { data: categories = [] } = useGetCategoriesQuery();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required(),
    price: yup.string().required(),
    stock: yup.string().required(),
    bookImage: yup.mixed().notOneOf(['', undefined], 'This field is required'),
    category: yup.string().required(),
    description: yup.string().required(),
    featured: yup.boolean().required(),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      price: '',
      stock: '',
      bookImage: '',
      category: '',
      description: '',
      featured: false,
    },
  });

  useEffect(() => {
    if (data?._id) {
      navigate(`${ROOT_PAGE_URL.MYACCOUNT}${ROOT_PAGE_URL.BOOKS}`);
    }
  }, [data]);

  const onSubmit = (data) => {
    create(data);
  };

  return { categories, control, handleSubmit, onSubmit };
};

export default usePostBooks;
