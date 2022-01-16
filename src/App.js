import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShotAddTask] = useState(false);

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

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

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
      <Header onAdd={() => setShotAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks Available"
      )}
    </div>
  );
}

export default App;
