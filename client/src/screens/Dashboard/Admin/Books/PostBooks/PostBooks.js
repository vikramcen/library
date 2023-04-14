import DashboardContentWrapper from '@components/DashboardContentWrapper/DashboardContentWrapper';
import FieldController from '@components/FieldController/FieldController';
import usePostBooks from './usePostBooks';

const PostBooks = () => {
  const { categories, control, handleSubmit, onSubmit } = usePostBooks();

  return (
    <DashboardContentWrapper title={'Add Book'}>
      <div className="account-details-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="title"
                label="Title"
                type="text"
                placeholder="Title"
              />
            </div>
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="price"
                label="Price"
                type="number"
                placeholder="Price"
              />
            </div>
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="stock"
                label="Stock"
                type="number"
                placeholder="Stock"
              />
            </div>
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="bookImage"
                label="Book Image"
                type="file"
                placeholder="Book Image"
              />
            </div>
            <div className="col-lg-6">
              <FieldController
                control={control}
                name="category"
                label="Category"
                type="select"
                options={categories.map((category) => ({
                  value: category.name,
                  label: category.name,
                }))}
                placeholder="Category"
              />
            </div>
            <div className="col-lg-12">
              <FieldController
                control={control}
                name="description"
                label="Description"
                type="textarea"
                placeholder="Description"
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

export default PostBooks;
