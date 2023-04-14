import BookItem from '@components/BookItem/BookItem';
import Breadcrumb from '@components/Breadcrumb/Breadcrumb';
import usePublicBooks from './usePublicBooks';

const PublicBooks = () => {
  const { category, books, categories, onClickCategory } = usePublicBooks();

  return (
    <>
      <Breadcrumb text={'Books'} />
      <div className="container">
        <div className="grid grid-cols-[270px,1fr] gap-10">
          <div className="shop-left">
            <div className="section-title-5 mb-30">
              <h2>Shopping Options</h2>
            </div>
            <div className="left-title mb-20">
              <h4>Category</h4>
            </div>
            <div className="left-menu mb-30">
              <ul>
                {categories.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`${category === item.name ? '!text-primary' : ''} cursor-pointer`}
                      onClick={() => onClickCategory(item.name)}
                    >
                      {item.name}
                      <span className={`${category === item.name ? '!text-primary' : ''}`}>
                        ({item.totalBooks})
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="">
            <div className="section-title-5 mb-30">
              <h2>Book</h2>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-3">
              {books.map((item, index) => {
                return <BookItem size="sm" book={item} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicBooks;
