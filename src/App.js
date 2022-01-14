import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  //have tasks in main App so tasks can be accessed globally
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "TOOL",
      day: "Feb 3rd at 7:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Megadeth",
      day: "April 14 at 7:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Mourtuary Descent",
      day: "Jan 15 at 10:00pm",
      reminder: false,
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
