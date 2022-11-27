import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";



function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState('All')
  
  function handleDelete(taskToDelete){
   setTasks( tasks.filter((task)=>{
     return task.text !== taskToDelete
    }))
  }

  function handleAddTask(newTask){
  return setTasks([...tasks, newTask])
  }

  const visibleTasks = tasks.filter((task)=>{
   return category === 'All' || task.category === category
  })

  const newTaskFormCategories = CATEGORIES.filter((c)=>{
    return c != 'All'
  })


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory}/>
      <NewTaskForm categories={newTaskFormCategories} onTaskFormSubmit={handleAddTask}/>
      <TaskList onDeleteTask={handleDelete} tasks={visibleTasks}/>
    </div>
  );
}

export default App;
