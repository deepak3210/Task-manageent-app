// src/pages/EditTask.js
import React, { useEffect, useState } from 'react';
import TaskForm from '../components/TaskForm';
import { updateTask, getTasks } from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await getTasks();
      const taskData = response.data.find((task) => task.id === parseInt(id));
      setTask(taskData);
    };
    fetchTask();
  }, [id]);

  const handleUpdateTask = async (updatedTask) => {
    await updateTask(id, updatedTask);
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Task</h1>
      {task && <TaskForm onSubmit={handleUpdateTask} initialTask={task} />}
    </div>
  );
};

export default EditTask;
