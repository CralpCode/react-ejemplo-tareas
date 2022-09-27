import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'



function TaskList() {

    const {Task} = useContext(TaskContext)

    if (Task.length === 0) {
        return <h1 className='text-white text-4xl text-center'>No hay tareas aun</h1>
    }

    return (
        <div className='grid grid-cols-4 gap-2'>
            {
                Task.map((tasks) => (
                <TaskCard key={tasks.id} tasks={tasks} />
                ))
            }
        </div>


    );
}

export default TaskList
