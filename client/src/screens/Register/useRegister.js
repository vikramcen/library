import { useRegisterMutation } from '@apis/auth/authApi';
import { ROOT_PAGE_URL } from '@constants/navigator';
import yup from '@utils/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';

const useRegister = () => {
  const [register, { data }] = useRegisterMutation();

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (data?._id) {
      toast.success('User created successfully');
      navigate(ROOT_PAGE_URL.LOGIN, { replace: true });
    }
  }, [data, navigate]);

  const onSubmit = (data) => {
    register(data);
  };

  return { control, handleSubmit, onSubmit };
};

export default useRegister;
