import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import UsersDataTable from "../../components/usersdatatable/UsersDataTable"
import "./users.scss"

const Users = () => {
  return (
    <div className="users">
      <Sidebar />
      <div className="usersContainer">
        <Navbar />
        <div className="userTableContainer">
          <UsersDataTable/>
        </div>
        
      </div>
    </div>
  )
}

export default Users