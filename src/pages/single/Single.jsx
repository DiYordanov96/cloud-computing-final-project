import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import TableList from "../../components/table/Table"

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editBtn">Edit</div>
            <h1 className="title">User Details</h1>
            <div className="item">
              <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="avatar" className="itemImg" />

              {/* User's Details */}
                  <div className="details">
                    <h1 className="itemTitle">Jason Bourne</h1>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">jasonbourne@gmail.com</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Phone Number:</span>
                      <span className="itemValue">+44 7412 845343</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">City:</span>
                      <span className="itemValue">London</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Address: </span>
                      <span className="itemValue">36 Carol street</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Age:</span>
                      <span className="itemValue">36</span>
                    </div>
                  </div>
              {/* User's Details */}
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom">
          <h2 className="taskTableTitle">Previous Tasks</h2>
          <TableList/>
        </div>
      </div>
    </div>
  )
}

export default Single