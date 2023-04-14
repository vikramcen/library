import yup from '@utils/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSendMessageMutation } from '@apis/contact/contactApi';
import { toast } from 'react-hot-toast';

const useContactUs = () => {
  const [send, { data }] = useSendMessageMutation();

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    message: yup.string().required(),
  });

  const onSubmit = (data) => {
    send(data);
  };

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  useEffect(() => {
    if (data?.success) {
      reset();
      toast.success('Message sent successfully');
    }
  }, [data]);

  return { control, handleSubmit, onSubmit };
};

export default useContactUs;
