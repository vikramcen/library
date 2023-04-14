import React from 'react';

const DashboardContentWrapper = ({ title, btn, onBtnClick, children }) => {
  return (
    <div className="myaccount-content">
      <div className="flex justify-between items-center mb-6 border-b border-dashed border-[#cccccc] pb-3">
        <h5 className="text-[1.25rem]">{title}</h5>
        {btn && onBtnClick && <button className='btn btn-default-outlined py-1 px-3 hover:bg-primary hover:text-white text-[12px]' onClick={onBtnClick}>{btn}</button>}
      </div>
      {children}
    </div>
  );
};

export default DashboardContentWrapper;
