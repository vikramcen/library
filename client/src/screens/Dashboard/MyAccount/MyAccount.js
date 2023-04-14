import DashboardContentWrapper from '@components/DashboardContentWrapper/DashboardContentWrapper';
import useAuth from '@hooks/useAuth';
import useMyAccount from './useMyAccount';

const MyAccount = () => {
  const { user } = useAuth()
  const {} = useMyAccount();

  return (
    <DashboardContentWrapper title={'Dashboard'}>
      <div className="welcome">
        <p>
          Hello, <strong>{user ? `${user.firstName} ${user.lastName}` : ''}</strong>
        </p>
      </div>
      <p className="mb-0">
        From your account dashboard. you can easily check &amp; view your recent orders, manage your
        shipping and billing addresses and edit your password and account details.
      </p>
    </DashboardContentWrapper>
  );
};

export default MyAccount;
