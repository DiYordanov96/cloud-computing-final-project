import "./widget.scss"
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import PeopleTwoToneIcon from '@mui/icons-material/PeopleTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import { Sick } from "@mui/icons-material";

const Widget = ({ type }) => {

    let data;

    //temporary
    const amount = 100;
    const diff= 100;

    switch (type) {
        case "user":
            data={
                title:"USERS",
                isMoney: false,
                link: "See all users",
                icon: <PeopleTwoToneIcon class="icon" />,
            }
            break;
        case "task":
            data={
                title:"TASKS",
                isMoney: false,
                link: "See all tasks",
                icon: <AssignmentTwoToneIcon class="icon" />,
            }
            break;

            default:
                break;
    }
   

  return (
    <div className="widget">

        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney}{amount}</span>
            <span className="link">{data.link}</span>
        </div>

        <div className="right">
            <div className="percentage positive">
            <ArrowUpwardOutlinedIcon />
                {diff}%
            </div>
            {data.icon}
        </div>

    </div>
  )
}

export default Widget; 