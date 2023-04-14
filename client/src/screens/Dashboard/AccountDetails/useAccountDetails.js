import { updateAuthUser } from '@apis/auth/authSlice';
import { useGetUserQuery, useUpdateUserMutation } from '@apis/user/userApi';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from '@utils/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const useAccountDetails = () => {
  const [updateUser, { data: updatedUser }] = useUpdateUserMutation();
  const { data: user } = useGetUserQuery();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string().required(),
    country: yup.string().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zipCode: yup.string().required(),
  });

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      country: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
    },
  });

  useEffect(() => {
    if (user?._id) {
      reset(user);
    }
  }, [user]);

  useEffect(() => {
    if (updatedUser?._id) {
      dispatch(updateAuthUser(updatedUser));
      toast.success('User updated successfully');
    }
  }, [updatedUser]);

  const onSubmit = (data) => {
    updateUser(data);
  };

  return { control, handleSubmit, onSubmit };
};

export default useAccountDetails;
