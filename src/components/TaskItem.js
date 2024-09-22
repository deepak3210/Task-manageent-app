// src/components/TaskItem.js
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';

const TaskItem = ({ task, index, onDelete }) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-4 rounded shadow-md mb-4"
        >
          <h3 className="text-xl font-semibold">{task.title}</h3>
          <p className="text-gray-700">{task.description}</p>
          <small className="text-gray-500 block mb-2">Due Date: {task.dueDate}</small>
          <div className="flex justify-between mt-4">
            <Link
              to={`/edit/${task.id}`}
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
            >
              Edit
            </Link>
            <button
              onClick={() => onDelete(task.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
