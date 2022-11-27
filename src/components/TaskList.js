import React from "react";
import Task from "./Task"

function TaskList({onDeleteTask, tasks}) {
  
  const showTasks = tasks.map((task)=>{
    return(
      <Task 
      key={task.text}
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
      />
    )
  })

  return (
    <div className="tasks">
      {showTasks}
    </div>
  );
}

export default TaskList;
