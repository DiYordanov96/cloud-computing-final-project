import "./sidebar.scss"
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {Link} from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {

const {dispatch} = useContext(DarkModeContext);


  return (
    <div className = "sidebar" > 
         <div className="top">
            <Link to ="/" style={{textDecoration:"none"}}>
                <span className="logo">QuickTask</span>
            </Link>
         </div>
         <hr/>
         <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <SpaceDashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LIST</p>
                <li>
                    <NotificationsActiveOutlinedIcon className="icon"/>
                    <span>Notifications</span> 
                </li>
                <Link to="/users" style={{textDecoration:"none"}}>
                        <li>
                            <GroupOutlinedIcon className="icon"/>
                            <span>Users</span>
                        </li>
                </Link>
                <Link to="/tasks" style={{textDecoration:"none"}}>
                        <li>
                            <ListAltIcon className="icon"/>
                            <span>Tasks</span>
                        </li>
                </Link>
                
                <li>
                    <DvrOutlinedIcon className="icon"/>
                    <span>Logs</span> 
                </li>
                
                <p className="title">USER</p>
                <li>
                    <AssignmentIndRoundedIcon className="icon"/>
                    <span>Profile</span> 
                </li>
                <li>
                    <SettingsOutlinedIcon className="icon"/>
                    <span>Settings</span> 
                </li>
                <li>
                    <LogoutRoundedIcon className="icon"/>
                    <span>Logout</span> 
                </li>
            </ul>
         </div>
         <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({type: "LIGHT"})}></div>
            <div className="colorOption" onClick={()=> dispatch({type: "DARK"})}></div>
         </div>
    </div>
  )
}

export default Sidebar