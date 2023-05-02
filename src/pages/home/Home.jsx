import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import TableList from "../../components/table/Table"
import UsersDataTable from "../../components/usersdatatable/UsersDataTable"
import "./home.scss"


const Home = () => {
  return (
    <div className='home'>
        < Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="task"/>
          </div>
          <div className="listContainer">
            <div className="firstTable">
              <div className="listTitle">Tasks Status</div>
              <TableList/>
            </div>
            <div className="secondTable">
            <div className="listTitle"> Users</div>
            <UsersDataTable />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home ;