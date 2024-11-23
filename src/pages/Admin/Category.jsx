import Sidebar from './Sidebar'
import MetaData from '../../../utils/MetaData'

const Category = () => {

  

  return (
    <div className="row">
    <div className="col-12 col-md-2">
      <Sidebar />
    </div>

    <MetaData title={"All categories"} />
  </div>
  )
}

export default Category