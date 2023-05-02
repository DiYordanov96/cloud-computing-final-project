import React, { useContext } from 'react';
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Users from "./pages/users/Users"




import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { userInputs, taskInput } from './formData';
import "./style/dark.scss"
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/AuthContext';

function App() {

  const {darkMode} = useContext(DarkModeContext)

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({children}) =>{
    return currentUser ? children : < Navigate to="/login"/>
  }
  
  
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<RequireAuth><Home/></RequireAuth>} />
            <Route path="login" element={<Login/>} />
            <Route path="users">
              <Route index element={<RequireAuth><Users /></RequireAuth>}/>
              <Route path=":userId" element={<RequireAuth><Single/></RequireAuth>}/>
              <Route 
              path="new" 
              element={<New input = {userInputs} title="Create New User"/>}/>
            </Route>
            <Route path="tasks">
              <Route index element={<RequireAuth><List/></RequireAuth>}/>
              <Route path=":taskId" element={<RequireAuth><Single/></RequireAuth>}/>
              <Route path="new" element={<New input = {taskInput} title="Create New Task"/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
