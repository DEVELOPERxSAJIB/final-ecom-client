import MetaData from "../../../utils/MetaData"
import Sidebar from "./Sidebar"

const CreateCategory = () => {
  return (
    <div className="row">
    <div className="col-12 col-md-2">
      <Sidebar />
    </div>

    <MetaData title={"Create category"} />
  </div>
  )
}

export default CreateCategory