import DashboardContentWrapper from '@components/DashboardContentWrapper/DashboardContentWrapper';
import useCategoriesList from './useCategoriesList';

const CategoriesList = () => {
  const { categories, onDeleteCategory, onClickAdd } = useCategoriesList();

  return (
    <DashboardContentWrapper title={'Categories'} btn="Add Category" onBtnClick={onClickAdd}>
      <div className="myaccount-table table-responsive text-center">
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td width={'20%'} align="center">
                    <span onClick={() => onDeleteCategory(item._id)} className="btn btn-sqr">
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
            {categories.length === 0 && (
              <tr>
                <td colSpan={3}>No categories found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DashboardContentWrapper>
  );
};

export default CategoriesList;
