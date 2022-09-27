import { createContext, useState, useEffect } from 'react'
import { tasks as data, tasks } from '../data/task'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

  const [Task, setTask] = useState([]);

  function createTask(Tasks, TaskDescription) {
    setTask([...Task, {
      title: Tasks,
      id: Task.length,
      description: TaskDescription

    }])
  }

  function deleteTask(taskId) {
    console.log(tasks)
    console.log(Task.filter(Task => Task.id !== taskId))
    setTask(Task.filter(Task => Task.id !== taskId))
  }

  useEffect(() => {
    setTask(data)
  }, [])


  return (
    <TaskContext.Provider value={{
      Task,
      deleteTask,
      createTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

