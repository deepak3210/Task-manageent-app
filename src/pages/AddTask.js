// src/pages/AddTask.js
import React from 'react';
import TaskForm from '../components/TaskForm';
import { addTask } from '../services/api';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const navigate = useNavigate();

  const handleAddTask = async (task) => {
    await addTask(task);
    navigate('/');
  };

  return (
    <div>
      <h1>Add Task</h1>
      <TaskForm onSubmit={handleAddTask} />
    </div>
  );
};

export default AddTask;
