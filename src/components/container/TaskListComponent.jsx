import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import Task from '../../models/task.class'
import TaskComponent from '../pure/TaskComponent';
function TaskListComponent() {
  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
  const changeStateTack = (id) => {
    console.log('TO DO: Cambiar estado de una tarea ');
  }
  return (
    <div>
      <div><h1>Your Task: </h1></div>
      { /*TODO: Aplicar un Map para renderizar una lista de tareas */}
      <TaskComponent
        task={defaultTask}
      />
    </div>
  )
}

export default TaskListComponent