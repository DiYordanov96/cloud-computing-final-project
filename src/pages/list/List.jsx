import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Table from "../../components/table/Table"
import "./list.scss"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar />
        <div className="table">
          <h1 className="title">All Tasks</h1>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default List