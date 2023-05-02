import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {userColumns, userRows} from "../../taskdatasource"


const TableList = () => {

  return (
    <TableContainer component={Paper} className="tableContainer">
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table">
        <TableHead>
          <TableRow>
              <TableCell className="tableCell">ID</TableCell>
              <TableCell className="tableCell">Task Title</TableCell>
              <TableCell className="tableCell"> Customer</TableCell>
              <TableCell className="tableCell"> Date</TableCell>
              <TableCell className="tableCell"> Amount</TableCell>
              <TableCell className="tableCell"> Payment Method</TableCell>
              <TableCell className="tableCell"> Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userRows.map((userRows) => (
            <TableRow
              key={userRows.id}
            >
              <TableCell className="tableCell">{userRows.id}</TableCell>
              <TableCell className="tableCell">{userRows.task}</TableCell>
              <TableCell className="tableCell">{userRows.customer}</TableCell>
              <TableCell className="tableCell">{userRows.date}</TableCell>
              <TableCell className="tableCell">{userRows.amount}</TableCell>
              <TableCell className="tableCell">{userRows.payment}</TableCell>
              <TableCell className="tableCell"><span className={`status ${userRows.status}`}>{userRows.status}</span></TableCell>


              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableList;