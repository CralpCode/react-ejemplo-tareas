import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'


function TaskForm() {

    const [title, settitle] = useState('')

    const [description, setdescription] = useState('')

    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        createTask(title, description)
        settitle('')
        setdescription('')
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4 rounded-md' >
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
                <input placeholder="Ecribe tu tarea" onChange={(e) =>
                    settitle(e.target.value)
                }
                    value={title}
                    className='bg-slate-300 p-3 w-full mb-2 rounded-md'
                />
                <textarea placeholder='Escribe la decripcion de la tarea' onChange={(e) =>
                    setdescription(e.target.value)
                } value={description} className='bg-slate-300 p-3 w-full mb-2 rounded-md'></textarea>
                <button className='bg-indigo-500 py-1 text-white rounded-md p-4 font-bold'>
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm