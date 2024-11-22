import "./Categories.css";
import { Link } from "react-router-dom";
import photo from "../../../assets/images/camera.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../../features/category/categoryApiSlice";

const Categories = () => {
  const disptach = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    disptach(getAllCategory());
  }, [disptach]);

  return (
    <div className="section mt-5">
      <div className="container">
        <h3 className="mb-3 p-0">Top Categories</h3>
        <div className="row">
          {categories.map((category, index) => (
            <>
              <div key={index} className="col-lg-8r text-center col-md-8r  p-2">
                <Link
                  style={{ textDecoration: "none" }}
                  className="card shadow-sm border-0 h-100 rounded-3 bg-white hover-card"
                >
                  <div className="card-body">
                    <img alt="photo" className="w-75" src={category?.photo?.url} />
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#222",
                        cursor: "pointer",
                      }}
                      className="mt-3"
                    >
                      {category?.name}
                    </p>
                  </div>
                </Link>
              </div>
            </>
          ))}

          <div className="col-lg-8r text-center col-md-8r p-2">
            <Link
              style={{ textDecoration: "none" }}
              className="card shadow-sm border-0 h-100 rounded-3 bg-white hover-card"
            >
              <div className="card-body">
                <img alt="photo" className="w-75" src={photo} />
                <p
                  style={{
                    fontSize: "14px",
                    color: "#222",
                    cursor: "pointer",
                  }}
                  className="mt-3"
                >
                  ItemName
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-8r text-center col-md-8r p-2">
            <Link
              style={{ textDecoration: "none" }}
              className="card shadow-sm border-0 h-100 rounded-3 bg-white hover-card"
            >
              <div className="card-body">
                <img alt="photo" className="w-75" src={photo} />
                <p
                  style={{
                    fontSize: "14px",
                    color: "#222",
                    cursor: "pointer",
                  }}
                  className="mt-3"
                >
                  ItemName
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-8r text-center col-md-8r p-2">
            <Link
              style={{ textDecoration: "none" }}
              className="card shadow-sm border-0 h-100 rounded-3 bg-white hover-card"
            >
              <div className="card-body">
                <img alt="photo" className="w-75" src={photo} />
                <p
                  style={{
                    fontSize: "14px",
                    color: "#222",
                    cursor: "pointer",
                  }}
                  className="mt-3"
                >
                  ItemName
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-8r text-center col-md-8r p-2">
            <Link
              style={{ textDecoration: "none" }}
              className="card shadow-sm border-0 h-100 rounded-3 bg-white hover-card"
            >
              <div className="card-body">
                <img alt="photo" className="w-75" src={photo} />
                <p
                  style={{
                    fontSize: "14px",
                    color: "#222",
                    cursor: "pointer",
                  }}
                  className="mt-3"
                >
                  ItemName
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-8r text-center col-md-8r p-2">
            <Link
              style={{ textDecoration: "none" }}
              className="card shadow-sm border-0 h-100 rounded-3 bg-white hover-card"
            >
              <div className="card-body">
                <img alt="photo" className="w-75" src={photo} />
                <p
                  style={{
                    fontSize: "14px",
                    color: "#222",
                    cursor: "pointer",
                  }}
                  className="mt-3"
                >
                  ItemName
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-8r text-center col-md-8r p-2">
            <Link
              style={{ textDecoration: "none" }}
              className="card shadow-sm border-0 h-100 rounded-3 bg-white hover-card"
            >
              <div className="card-body">
                <img alt="photo" className="w-75" src={photo} />
                <p
                  style={{
                    fontSize: "14px",
                    color: "#222",
                    cursor: "pointer",
                  }}
                  className="mt-3"
                >
                  ItemName
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-8r text-center col-md-8r p-2">
            <Link
              style={{ textDecoration: "none" }}
              className="card shadow-sm border-0 h-100 rounded-3 bg-white hover-card"
            >
              <div className="card-body">
                <img alt="photo" className="w-75" src={photo} />
                <p
                  style={{
                    fontSize: "14px",
                    color: "#222",
                    cursor: "pointer",
                  }}
                  className="mt-3"
                >
                  ItemName
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-8r text-center col-md-8r p-2">
            <Link
              style={{ textDecoration: "none" }}
              className="card shadow-sm border-0 h-100 rounded-3 bg-white hover-card"
            >
              <div className="card-body">
                <img alt="photo" className="w-75" src={photo} />
                <p
                  style={{
                    fontSize: "14px",
                    color: "#222",
                    cursor: "pointer",
                  }}
                  className="mt-3"
                >
                  ItemName
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-8r text-center col-md-8r p-2">
            <Link
              style={{ textDecoration: "none" }}
              className="card shadow-sm border-0 h-100 rounded-3 bg-white hover-card"
            >
              <div className="card-body">
                <img alt="photo" className="w-75" src={photo} />
                <p
                  style={{
                    fontSize: "14px",
                    color: "#222",
                    cursor: "pointer",
                  }}
                  className="mt-3"
                >
                  ItemName
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
