import DashboardContentWrapper from '@components/DashboardContentWrapper/DashboardContentWrapper';
import FieldController from '@components/FieldController/FieldController';
import useAccountDetails from './useAccountDetails';

const AccountDetails = () => {
  const { control, handleSubmit, onSubmit } = useAccountDetails();
  
  return (
    <DashboardContentWrapper title={'Account Details'}>
      <div className="account-details-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="firstName"
                label="First Name"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="lastName"
                label="Last Name"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="email"
                label="Email"
                disabled
                placeholder="Email"
              />
            </div>
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="phone"
                label="Phone"
                type="text"
                placeholder="Phone"
              />
            </div>
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="country"
                label="Country"
                type="text"
                placeholder="Country"
              />
            </div>
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="address"
                label="Address"
                type="text"
                placeholder="Address"
              />
            </div>
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="city"
                label="City"
                type="text"
                placeholder="City"
              />
            </div>
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="state"
                label="State"
                type="text"
                placeholder="State"
              />
            </div>
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="zipCode"
                label="Zip Code"
                type="text"
                placeholder="Zip Code"
              />
            </div>
          </div>
          <div className="single-input-item">
            <button className="btn btn-sqr">Save Changes</button>
          </div>
        </form>
      </div>
    </DashboardContentWrapper>
  );
};

export default AccountDetails;
