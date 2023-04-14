import DashboardContentWrapper from '@components/DashboardContentWrapper/DashboardContentWrapper';
import React from 'react';
import useContactUsEnquiries from './useContactUsEnquiries';

const ContactUsEnquiries = () => {
  const { data } = useContactUsEnquiries();

  return (
    <DashboardContentWrapper title={'Contact Us'}>
      <div className="myaccount-table table-responsive text-center">
        <table className="table table-bordered text-left">
          <thead className="thead-light">
            <tr>
              <th className="text-center">#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td className="text-center" rowSpan="2">
                      {index + 1}
                    </td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                  <tr key={index}>
                    <td align="left" colSpan={'3'}>
                      <div className="flex">
                        <span className="mr-2 font-bold">Message: </span>
                        <span>{item.message}</span>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
            {data.length === 0 && (
              <tr>
                <td align='center' colSpan={4}>No enquiries found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DashboardContentWrapper>
  );
};

export default ContactUsEnquiries;
