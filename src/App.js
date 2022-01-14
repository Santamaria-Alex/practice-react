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

  //Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks Available"
      )}
    </div>
  );
}

export default App;
