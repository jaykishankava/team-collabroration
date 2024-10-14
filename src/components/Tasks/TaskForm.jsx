import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('In Progress');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(), // Simple ID generation
      title,
      status,
      priority,
      dueDate,
    };
    addTask(newTask);
    setTitle('');
    setStatus('In Progress');
    setPriority('Medium');
    setDueDate('');
  };

  return (
   <div>
     <form onSubmit={handleSubmit} >
      <h3>Create a New Task</h3>
      <input 
        className='form-control mb-2'
        type="text" 
        placeholder="Task Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <select className='form-control mb-2' value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <select className='form-control mb-2' value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input 
        type="date" 
        className='form-control mb-2'
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
        required 
      />
      <button className='btn btn-primary' type="submit">Add Task</button>
    </form>
   </div>
  );
};

export default TaskForm;
