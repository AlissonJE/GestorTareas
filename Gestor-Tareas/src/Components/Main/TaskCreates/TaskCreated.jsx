import React from 'react'
import { TaskStructure } from '../TaskStructure/TaskStructure'


export const TaskCreated = () => {
  return (
    <ul>
      <TaskStructure task={{ id: 1, text: 'Primera Tareas', completed: false }} onToggle={() => {}} onDelete={() => {}} />
      <TaskStructure task={{ id: 2, text: 'Segunda Tarea', completed: true }} onToggle={() => {}} onDelete={() => {}} />
      <TaskStructure task={{ id: 3, text: 'Tercera Tarea', completed: false }} onToggle={() => {}} onDelete={() => {}} /> 
    </ul>
  )
}