import { useDeleteCategoryMutation, useGetCategoriesQuery } from '@apis/category/categoryApi';
import { ROOT_PAGE_URL } from '@constants/navigator';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const useCategoriesList = () => {
  const { data = [] } = useGetCategoriesQuery();
  const [categories, setCategories] = useState([]);

  const [deleteCategory, { data: deletedCategory }] = useDeleteCategoryMutation();

  const navigate = useNavigate();

  useEffect(() => {
    setCategories(data);
  }, [data]);

  useEffect(() => {
    if (deletedCategory?._id) {
      toast.success('Category deleted successfully');
      const updatedCategories = [...categories].filter(
        (item) => item?._id !== deletedCategory?._id,
      );
      setCategories(updatedCategories);
    }
  }, [deletedCategory]);

  const onDeleteCategory = (id) => {
    deleteCategory(id);
  };

  const onClickAdd = () => {
    navigate(`${ROOT_PAGE_URL.MYACCOUNT}/${ROOT_PAGE_URL.CATEGORIES.slice(1)}/post`);
  };

  return { categories, onDeleteCategory, onClickAdd };
};

export default useCategoriesList;
