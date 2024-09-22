// src/components/TaskList.js
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskItem from './TaskItem';

const TaskList = ({ tasks = [], onDelete }) => {
  return (
    <Droppable droppableId="tasks">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {tasks.map((task, index) => (
            <TaskItem key={task.id} task={task} index={index} onDelete={onDelete} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
