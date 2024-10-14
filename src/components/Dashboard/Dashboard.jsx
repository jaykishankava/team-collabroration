import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Dashboard.css';
import TaskForm from '../Tasks/TaskForm';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  
  const [tasks, setTasks] = useState(() => {
    // Load tasks from local storage or initialize with an empty array
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  
  const [filter, setFilter] = useState({ status: '', priority: '', dueDate: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const filteredTasks = tasks.filter(task => {
    const matchesStatus = filter.status ? task.status === filter.status : true;
    const matchesPriority = filter.priority ? task.priority === filter.priority : true;
    const matchesDueDate = filter.dueDate ? task.dueDate === filter.dueDate : true;
    return matchesStatus && matchesPriority && matchesDueDate;
  });

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save to local storage
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save to local storage
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save to local storage
  };

  useEffect(() => {
    // Sync tasks with local storage on component mount
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div className="container ">
      <header className="header mt-2 mb-3 rounded-pill bg-secondary text-light">
        <h3>Welcome_ {user?.email || 'User'}</h3>
      </header>
      <div className="dashboard">
        <section className="task-management">
          <TaskForm addTask={addTask} />
          <div>
            <h3>Filters</h3>
            <select className='form-control' name="status" onChange={handleFilterChange}>
              <option value="">All Statuses</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <select className='form-control' name="priority" onChange={handleFilterChange}>
              <option value="">All Priorities</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <input 
            className='form-control'
              type="date" 
              name="dueDate" 
              onChange={handleFilterChange} 
            />
          </div>
          <ul>
            {filteredTasks.map(task => (
              <li key={task.id}>
                {task.title } - {task.status} - {task.priority} - Due: {task.dueDate}
                <button className='btn btn-success btn-sm ms-2 me-2 mb-2' onClick={() => updateTask({ ...task, status: 'Completed' })}>Complete</button>
                <button className='btn btn-danger btn-sm' onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
