import MetaData from "../../../utils/MetaData";
import Sidebar from "./Sidebar";

const Brand = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-2">
        <Sidebar />
      </div>

      <MetaData title={"All Brand"} />
    </div>
  );
};

export default Brand;
