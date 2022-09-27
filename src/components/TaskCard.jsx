import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ tasks }) {

  const { deleteTask } = useContext(TaskContext)

  return (
    <div key={tasks.id} className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className='text-xl font-bold capitalize'>{tasks.title}</h1>
      <p className='text-gray-500 text-sm'>{tasks.description}</p>
      <button className='bg-red-500 py-1 rounded-md mt-4 hover:bg-red-400 p-4 font-bold' onClick={() => deleteTask(tasks.id)}>
        Eliminar
      </button>
    </div>
  )
}

export default TaskCard