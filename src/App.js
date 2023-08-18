import React, { useState } from 'react';

import Addtask from './components/addtask.component';
import Appbar from './components/appbar.component';
import Footer from './components/footer.component';
import Showtask from './components/showtask.component';

import './App.css';

function App() {

  const [taskList, setTask] = useState([
      { 
          id: 1001, 
          name: "Wake Up Early", 
          time: "6:00:00 AM 8/19/2023" 
      },
      {
          id: 2001,
          name: "Practice Leetcode Daily",
          time: "7:22:19 AM 8/17/2023",
      },
      {
          id: 3001,
          name: "Complete REACT project",
          time: "12:09:58 PM 8/12/2023",
      },
      {
        id: 4001,
        name: "Watch a Movie",
        time: "10:00:00 PM 8/10/2023",
    },
  ]);

  return (
    <>
    <Appbar/>
    <Addtask taskList={taskList} setTask={setTask}/>
    <Showtask taskList={taskList} setTask={setTask}/>
    <Footer/>
    </>
  );
}

export default App;
