import { useCreateCategoryMutation } from '@apis/category/categoryApi';
import { ROOT_PAGE_URL } from '@constants/navigator';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from '@utils/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const usePostCategory = () => {
  const [create, { data }] = useCreateCategoryMutation();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required(),
  });

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (data?._id) {
      toast.success('Category created successfully');
      navigate(`${ROOT_PAGE_URL.MYACCOUNT}${ROOT_PAGE_URL.CATEGORIES}`, { replace: true });
    }
  }, [data]);

  const onSubmit = (data) => {
    create(data);
  };

  return { control, handleSubmit, onSubmit };
};

export default usePostCategory;
