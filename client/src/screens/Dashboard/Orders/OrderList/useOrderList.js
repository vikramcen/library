import {
  useGetOrdersByUserQuery,
  useGetOrdersQuery,
  useUpdateOrderStatusMutation,
} from '@apis/order/orderApi';
import useAuth from '@hooks/useAuth';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const useOrders = () => {
  const { role } = useAuth();
  const [orders, setOrders] = useState([]);

  // Get Orders By Admin
  const { data = [], refetch } = useGetOrdersQuery(undefined, {
    skip: role !== 'admin',
  });

  // Get Orders By User
  const { data: userData = [] } = useGetOrdersByUserQuery(undefined, {
    skip: role !== 'user',
  });

  // Update Order
  // update order status
  const [updateStatus, { data: updatedOrder }] = useUpdateOrderStatusMutation();

  useEffect(() => {
    if (updatedOrder?._id) {
      toast.success('Order status updated successfully');
      const updatedOrders = [...orders].map((order) => {
        if (updatedOrder?._id === order) {
          return updatedOrder;
        } else {
          return order;
        }
      });
      setOrders(updatedOrders);
    }
  }, [updatedOrder]);

  useEffect(() => {
    if (role === 'admin') {
      setOrders(data);
    } else {
      setOrders(userData);
    }
  }, [role, data, userData]);

  const updateOrderStatus = async (payload) => {
    updateStatus(payload);
  };

  const onDownloadReport = async () => {
    if (orders?.length === 0) {
      toast.error('No orders found');
    }
    const orderId = new Date().getTime();
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/orders/download-order-reports`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `order-${orderId}.pdf`;
    link.click();
  };

  return { data: orders, onDownloadReport, updateOrderStatus };
};

export default useOrders;
