import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  
  const showOptions = categories.map((option)=>{
    return <option key={option} value={option}>{option}</option>
  })

  const [text, setText] = useState("");
  const [category, setCategory] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    onTaskFormSubmit({text, category})
    setText('');
    setCategory('')
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={e=> setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={e=>setCategory(e.target.value)}>
          {showOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
