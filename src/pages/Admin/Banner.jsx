import Sidebar from "./Sidebar";
import MetaData from "../../../utils/MetaData";

const Banner = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-2">
        <Sidebar />
      </div>

      <MetaData title={"Hero banners"} />
    </div>
  );
};

export default Banner;
