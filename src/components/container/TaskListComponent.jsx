import React, {useState, useEffect} from 'react'
import { LEVELS } from '../../models/levels.enum'
import Task from '../../models/task.class'
import TaskComponent from '../pure/TaskComponent';
import '../../styles/task.scss'

function TaskListComponent() {
  
  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

  const [tasks, setTasks] = useState(defaultTask);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    console.log('Task state has been modified');
    setloading(false);
    return () => {
      console.log('TaskList component is going to unmount...');
    }
  }, [tasks])
  
  
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
  );
}

export default TaskListComponent