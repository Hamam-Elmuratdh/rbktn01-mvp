import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar.js';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">
     <AppNavbar/>
     <ToDoList/>
    </div>
  );
}

export default App;
