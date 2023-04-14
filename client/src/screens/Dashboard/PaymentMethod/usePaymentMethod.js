import { useGetPaymentQuery, useUpdatePaymentMutation } from '@apis/payment/paymentApi';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from '@utils/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const usePaymentMethod = () => {
  const [update, { data }] = useUpdatePaymentMutation();
  const { data: paymentDetails } = useGetPaymentQuery();

  const schema = yup.object().shape({
    cardNumber: yup.string().required(),
    cvcCode: yup.string().required(),
    expireDate: yup.string().required(),
    zipCode: yup.string().required(),
  });

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      cardNumber: '',
      cvcCode: '',
      expireDate: '',
      zipCode: '',
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if(paymentDetails){
      reset(paymentDetails);
    }
  }, [paymentDetails]);

  useEffect(() => {
    if (data?._id) {
      toast.success('Payment method updated successfully');
    }
  }, [data]);

  const onSubmit = (data) => {
    update(data);
  };

  return { control, handleSubmit, onSubmit };
};

export default usePaymentMethod;
