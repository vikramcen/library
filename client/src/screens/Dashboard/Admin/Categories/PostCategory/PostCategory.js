import DashboardContentWrapper from '@components/DashboardContentWrapper/DashboardContentWrapper';
import FieldController from '@components/FieldController/FieldController';
import usePostCategory from './usePostCategory';

const PostCategory = () => {
  const { control, handleSubmit, onSubmit } = usePostCategory();

  return (
    <DashboardContentWrapper title={'Add Category'}>
      <div className="account-details-form pt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="name"
                label="Category Name"
                placeholder="Enter your category name"
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

export default PostCategory;
