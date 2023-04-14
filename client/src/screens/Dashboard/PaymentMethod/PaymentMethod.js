import DashboardContentWrapper from '@components/DashboardContentWrapper/DashboardContentWrapper';
import FieldController from '@components/FieldController/FieldController';
import usePaymentMethod from './usePaymentMethod';

const PaymentMethod = () => {
  const { control, handleSubmit, onSubmit } = usePaymentMethod();

  return (
    <DashboardContentWrapper title={'Payment Method'}>
      <div className="account-details-form pt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="cardNumber"
                label="Card Number"
                placeholder="Enter your card number"
              />
            </div>
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="cvcCode"
                label="CVC Code"
                placeholder="Enter your CVC code"
              />
            </div>
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="expireDate"
                label="Expire Date"
                placeholder="exapmle: 12/2021"
              />
            </div>
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="zipCode"
                label="Zip Code"
                placeholder="Enter your zip code"
              />
            </div>
          </div>
          <div className="single-input-item">
            <button className="btn btn-sqr">Submit</button>
          </div>
        </form>
      </div>
    </DashboardContentWrapper>
  );
};

export default PaymentMethod;
