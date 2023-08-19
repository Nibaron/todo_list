import React, { useEffect, useState } from 'react';

import Addtask from './components/addtask.component';
import Appbar from './components/appbar.component';
import Footer from './components/footer.component';
import Showtask from './components/showtask.component';

import './App.css';

function App() {

  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []);

  const [task, setTask] = useState({});

  useEffect(()=>{
    localStorage.setItem("taskList", JSON.stringify(taskList))
  },[taskList]);

  return (
    <>
    <Appbar/>
    <Addtask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
    <Showtask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
    <Footer/>
    </>
  );
}

export default App;
