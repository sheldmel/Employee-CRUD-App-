import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
function App() {
  return (
    <div>
        <Router>
              <div className="container">
                  <Switch> 
                        <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                        <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                        <Route path = "/add-employee" component = {CreateEmployeeComponent}></Route>
                        <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                        <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                  </Switch>
              </div>
        </Router>
    </div>
    
  );
}

export default App;