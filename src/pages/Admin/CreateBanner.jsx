import Sidebar from "./Sidebar";
import MetaData from "../../../utils/MetaData";
import { FiUploadCloud } from "react-icons/fi";

const CreateBanner = () => {
  return (
    <div className="row">
      <MetaData title={"Hero banners"} />
      <div className="col-md-2">
        <Sidebar />
      </div>

      <div className="col-md-10">
        <h5 className="my-3">Create Hero Banner</h5>
        <form action="">
          <div className="upload-section shadow-sm">
            <label className="d-block" htmlFor="cntwhic">
              <FiUploadCloud htmlFor="cntwhic" size={45} />
              <p>Upload banner image</p>
              <input id="cntwhic" type="file" hidden />
            </label>
          </div>
          <div className="my-3">
            <button
              style={{
                border: "0",
                width: "100%",
                backgroundColor: "#0F172A",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              type="submit"
              className="upload-button shadow-sm"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBanner;
