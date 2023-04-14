import { useLoginMutation } from '@apis/auth/authApi';
import { ROOT_PAGE_URL } from '@constants/navigator';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from '@utils/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [login, { data, error }] = useLoginMutation();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (data?.user?._id) {
      toast.success('User Logged In Successfully');
      navigate(ROOT_PAGE_URL.MYACCOUNT);
    }
    if (error) {
      toast.error("User doesn't exist");
    }
  }, [data, error, navigate]);

  const onSubmit = (data) => {
    login(data);
  };

  return { control, handleSubmit, onSubmit };
};

export default useLogin;
