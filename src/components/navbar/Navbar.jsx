import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
const Navbar = () => {

    const{dispatch} = useContext(DarkModeContext);
  return (
    <div className = "navbar" >
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search ..." />
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
              <div className="item" >
                <LanguageOutlinedIcon className="icon"/>
                       English
              </div>
              <div className="item">
                  <ModeNightOutlinedIcon className="icon" onClick={()=> dispatch({type: "TOGGLE"})}/>
              </div>
              <div className="item">
                  <NotificationsNoneOutlinedIcon className="icon" />
                  <div className="counter">1</div>
              </div>
              <div className="item">
                  <ForumOutlinedIcon className="icon"/>
                  <div className="counter">2</div>
              </div>
              <div className="item">
                  <MenuOutlinedIcon className="icon" />
              </div>
              <div className="item">
                  <img 
                    src="https://png.pngtree.com/png-clipart/20220719/original/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_8385663.png" 
                    alt="avatarImg" 
                    className="avatar" />
              </div>
        </div>
      </div>  
    </div>
  )
}

export default Navbar 