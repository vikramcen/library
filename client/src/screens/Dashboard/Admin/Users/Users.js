import DashboardContentWrapper from '@components/DashboardContentWrapper/DashboardContentWrapper';
import useUsers from './useUsers';

const Users = () => {
  const { data } = useUsers();

  return (
    <DashboardContentWrapper title={'Users'}>
      <div className="myaccount-table table-responsive text-center">
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.firstName + ' ' + item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.phone}</td>
                </tr>
              );
            })}
            {data.length === 0 && (
              <tr>
                <td colSpan={5}>No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DashboardContentWrapper>
  );
};

export default Users;
