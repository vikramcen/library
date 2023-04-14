import DashboardContentWrapper from '@components/DashboardContentWrapper/DashboardContentWrapper';
import { ROOT_PAGE_URL } from '@constants/navigator';
import useAuth from '@hooks/useAuth';
import moment from 'moment';
import { Link } from 'react-router-dom';
import useOrderList from './useOrderList';

const Orders = () => {
  const { data, updateOrderStatus, onDownloadReport } = useOrderList();
  const { role } = useAuth();

  return (
    <DashboardContentWrapper title={'Orders'} btn={"Download Orders Reports"} onBtnClick={onDownloadReport}>
      <div className="myaccount-table table-responsive text-center">
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th>Order</th>
              {role === 'admin' && <th>Name</th>}
              <th>Date</th>
              {role === 'admin' && <th>Status</th>}
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                {role === 'admin' && <td>{item?.user?.firstName + ' ' + item?.user?.lastName}</td>}
                <td> {moment(Number(item?.orderDate)).format('DD MMMM, YYYY')}</td>
                {role === 'admin' && (
                  <td>
                    <select
                      className="border p-2"
                      onChange={(e) =>
                        updateOrderStatus({
                          id: item?._id,
                          status: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Status</option>
                      <option selected={item?.status === 'pending'} value="pending">
                        Pending
                      </option>
                      <option selected={item?.status === 'accepted'} value="accepted">
                        Accepted
                      </option>
                      <option selected={item?.status === 'deliver'} value="deliver">
                        Deliver
                      </option>
                      <option selected={item?.status === 'completed'} value="completed">
                        Completed
                      </option>
                      <option selected={item?.status === 'rejected'} value="rejected">
                        Rejected
                      </option>
                    </select>
                  </td>
                )}
                <td>${item?.totalPrice}</td>
                <td>
                  <Link
                    to={`${ROOT_PAGE_URL.MYACCOUNT}${ROOT_PAGE_URL.ORDERS}/view/${item._id}`}
                    className="btn btn-sqr"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={5}>No data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DashboardContentWrapper>
  );
};

export default Orders;
