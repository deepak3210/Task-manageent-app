// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTasks, deleteTask } from '../services/api';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return; // If there's no destination, exit

    // If the item was dropped in the same position, exit
    if (destination.index === source.index) return;

    // Rearrange the tasks array
    const updatedTasks = Array.from(tasks);
    const [movedTask] = updatedTasks.splice(source.index, 1);
    updatedTasks.splice(destination.index, 0, movedTask);

    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Task Management</h1>
      <div className="flex justify-center mb-6">
        <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Task
        </Link>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <TaskList tasks={tasks} onDelete={handleDelete} />
      </DragDropContext>
    </div>
  );
};

export default Dashboard;
