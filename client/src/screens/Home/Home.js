import BookItem from '@components/BookItem/BookItem';
import SliderImage from '@images/slider/libimg.jpg';
import useHome from './useHome';

const Home = () => {
  const { books } = useHome();

  return (
    <>
      <div className="single-slider bg-img relative">
        <img
          src={SliderImage}
          className="object-cover w-full h-[450px]"
          alt=""
        />
      </div>
      <div className="product-area pt-95 xs-mb">
        <div className="container">
          <div className="section-title text-center mb-50">
            <h2>Top interesting</h2>
            <p>
              Browse the collection of our best selling and top rated books. <br /> 
            </p>
          </div>
          <div className="grid grid-cols-5 gap-4 mb-3">
            {books.map((item, index) => {
              return <BookItem book={item} key={index} />;
            })}
          </div>
          {books.length > 10 && (
            <div className="text-center mb-5">
              <button className="btn-theme-btn !px-14">View All</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
