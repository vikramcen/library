import { useGetContactsQuery } from '@apis/contact/contactApi';

const useContactUsEnquiries = () => {
  const { data = [] } = useGetContactsQuery();

  return { data };
};

export default useContactUsEnquiries;
