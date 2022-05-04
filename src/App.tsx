import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginPage from './pages/loginPage';
import NotFound from './pages/notFoundPage';
import RegisterPage from './pages/registerPage';
import StartingPage from './pages/startingPage';
import UserPage from './pages/userPage';


function App() {
  return (
    <Router>
      {/* <Nav/> */}
      <Routes>
        
        {/* {JSON.parse(sessionStorage.getItem('loggedUser')!)==null || <Route path ="*" element = {<NotFound/>} /> } */}
        <Route path="/userPage" element = {<UserPage/>} />
        <Route path="/startingpage" element = {<StartingPage/>} />
        <Route path="/loginPage" element = {<LoginPage/>} />

        <Route path="/registerPage" element = {<RegisterPage/>}/>
        <Route path="/" element = {<StartingPage/>} />

        <Route path ="*" element = {<NotFound/>} />

      </Routes>
    </Router>
  );
}

export default App;
