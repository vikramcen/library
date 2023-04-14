import DashboardContentWrapper from '@components/DashboardContentWrapper/DashboardContentWrapper';
import moment from 'moment';
import useViewOrder from './useViewOrder';

const ViewOrder = () => {
  const { viewOrder, onBackClick } = useViewOrder();

  return (
    <DashboardContentWrapper title={'Order Details'}>
      <div
        className={`${viewOrder?._id ? 'flex' : 'hidden'} bg-black/70 items-center justify-center`}
      >
        <div className="bg-white rounded-lg w-full">
          <div>
            <li>
              <span>Order Number: </span>
              <span className="font-semibold">#{viewOrder?._id}</span>
            </li>
            <li>
              <span>Date: </span>
              <span className="font-semibold">
                {moment(Number(viewOrder?.orderDate)).format('MMM Do YY')}
              </span>
            </li>
            <li>
              <span>Total: </span>
              <span className="font-semibold">${viewOrder?.totalPrice}</span>
            </li>
            <li>
              <span>Status: </span>
              <span className="font-semibold">{viewOrder?.status}</span>
            </li>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-3">Order Items</h3>
            <div className="border">
              <div className="flex items-center justify-between p-2 border-b">
                <span>Product</span>
                <span>Total</span>
              </div>

              {viewOrder?._id &&
                Object.keys(viewOrder?.books)?.map((key) => (
                  <div className="flex items-center justify-between p-2 border-b">
                    <span>
                      {viewOrder?.books[key]?.item?.title} - {viewOrder?.books[key]?.qty} -{' '}
                      {viewOrder?.books[key]?.item?.type}
                    </span>
                    <span>${viewOrder?.books[key]?.price}</span>
                  </div>
                ))}

              <div className="flex items-center justify-between p-2">
                <span>Total</span>
                <span>${viewOrder?.totalPrice}</span>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <button onClick={onBackClick} className="inline-block border py-2 px-7">Back</button>
          </div>
        </div>
      </div>
    </DashboardContentWrapper>
  );
};

export default ViewOrder;
