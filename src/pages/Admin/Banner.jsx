import Sidebar from "./Sidebar";
import MetaData from "../../../utils/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AlertMessage from "../../../utils/AlertMessage";
import { myOrders } from "../../features/order/orderApiSlice";
import { setMessageEmpty } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";
import MainLoader from "../../../utils/MainLoader";
import { MDBDataTable } from "mdbreact";

const Banner = () => {
  const dispatch = useDispatch();

  const { orders, error, loader } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(myOrders());

    if (error) {
      AlertMessage({ type: "error", msg: error });
      dispatch(setMessageEmpty());
    }
  }, [dispatch, error]);

  const setOrders = () => {
    const data = {
      columns: [
        {
          label: "Order ID",
          field: "id",
        },
        {
          label: "Items",
          field: "numOfItems",
        },
        {
          label: "Amount",
          field: "amount",
        },
        {
          label: "Status",
          field: "status",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],
      rows: [],
    };

    orders?.forEach((order) => {
      data.rows.push({
        id: order._id,
        numOfItems: order.orderItems.length,
        amount: `$${order.totalPrice}`,
        status:
          order.orderStatus &&
          String(order.orderStatus).includes("Delivered") ? (
            <p style={{ color: "green" }}>{order.orderStatus}</p>
          ) : (
            <p style={{ color: "red" }}>{order.orderStatus}</p>
          ),
        actions: (
          <Link to={`/order/${order._id}`} className="btn btn-primary">
            <i className="fa fa-eye"></i>
          </Link>
        ),
      });
    });

    data.rows.reverse();
    return data;
  };
  return (
    <>
      <MetaData title={"Hero banners"} />
      {loader && <MainLoader />}
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>
        <div className="col-12 col-md-10">
          <div className="my-5">
            <div className="px-3 mb-3 d-flex align-items-center justify-content-between">
              <h1 className="">All Banners</h1>
            <Link id="view_btn" className="btn" to={`/admin/create-hero-banner`}>
              Add New Banner
            </Link>
            </div>
            <MDBDataTable
              data={setOrders()}
              className="px-3"
              striped
              bordered
              hover
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
