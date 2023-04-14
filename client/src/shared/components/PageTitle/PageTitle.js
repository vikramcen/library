import React from 'react';

const PageTitle = ({ title }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="entry-header-title">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
