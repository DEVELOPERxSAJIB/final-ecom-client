import { useEffect, useState } from "react";
import MetaData from "../../../utils/MetaData";
import { getAllProducts } from "../../features/products/productApiSlice";
import { useDispatch, useSelector } from "react-redux";
import MainLoader from "../../../utils/MainLoader";
import AlertMessage from "../../../utils/AlertMessage";
import { setMessageEmpty } from "../../features/products/productSlice";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import Ratings from "../../components/Ratings/Ratings";
import HomeSlider from "../../components/Home/HomeSlider/HomeSlider";
import Categories from "../../components/Home/Categories/Categories";
import Brand from "../../components/Home/Brand/Brand";
import Features from "../../components/Home/Features/Features";
import middleBanner from "../../assets/slider/middleBanner.jpg";
import { FaRegEye } from "react-icons/fa6";
import { BsCartPlus } from "react-icons/bs";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loader, message, error, resPerPage, productCount } =
    useSelector((state) => state.product);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(0);

  const setCurrentPageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllProducts({ currentPage, pageSize }));
  }, [currentPage, dispatch, pageSize]);

  useEffect(() => {
    if (message) {
      AlertMessage({ type: "success", msg: message });
      dispatch(setMessageEmpty());
    }

    if (error) {
      AlertMessage({ type: "error", msg: error });
      dispatch(setMessageEmpty());
    }
  }, [dispatch, error, message]);

  return (
    <>
      <MetaData title={"Buy best products shop online"} />
      {loader ? (
        <MainLoader />
      ) : (
        <>
          <HomeSlider />
          <Features />
          <Categories />
          <section id="products" className="container">
            <h3 id="products_heading">Latest Products</h3>
            <>
              <div className="row">
                {products &&
                  products.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="col-sm-12 p-2 col-md-6 col-lg-3 my-3"
                      >
                        <div className="card p-2 border-0 shadow-sm rounded">
                          <img
                            style={{
                              objectFit: "cover",
                              objectPosition: "top center",
                            }}
                            className="card-img-top mx-auto"
                            src={item?.images[0]?.url}
                          />
                          <div className="card-body d-flex flex-column">
                            <div className="card-title">
                              <Link to={`/product/${item._id}`}>
                                {item.name}
                              </Link>
                            </div>
                            <div className="d-flex align-items-center mt-auto">
                              <Ratings value={item.ratings} size="small" />
                              <span id="no_of_reviews">
                                ({item.numOfReviews} Reviews)
                              </span>
                            </div>
                            <p className="card-text">${item.price}</p>
                            <div className="d-flex">
                              <Link
                                to={`/product/${item._id}`}
                                id="view_btn"
                                className="btn w-100 mr-1"
                              >
                                <FaRegEye />
                              </Link>

                              <Link
                                to={`/product/${item._id}`}
                                id="view_btn"
                                className="btn w-100"
                              >
                                <BsCartPlus className="ml-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </>
          </section>
          {productCount >= resPerPage && (
            <div className="d-flex justify-content-center my-5">
              <Pagination
                prevPageText={"Previous"}
                nextPageText={"Next"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass="page-item"
                linkClass="page-link"
                activePage={currentPage}
                itemsCountPerPage={resPerPage}
                totalItemsCount={productCount}
                onChange={setCurrentPageNumber}
              />
            </div>
          )}
          <div className="container">
            <div className="row d-block" style={{ unicodeBidi: "isolate" }}>
              <a href="#" className="middle-banner banner-effect">
                <img
                  className="w-100 img-responsive"
                  src={middleBanner}
                  alt=""
                />
              </a>
            </div>
          </div>
          <Brand />
        </>
      )}
    </>
  );
};

export default Home;
