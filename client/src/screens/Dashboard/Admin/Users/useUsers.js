import { useGetUsersQuery } from '@apis/user/userApi';
import React from 'react';

const useUsers = () => {
  const { data = [] } = useGetUsersQuery();
  return { data };
};

export default useUsers;
