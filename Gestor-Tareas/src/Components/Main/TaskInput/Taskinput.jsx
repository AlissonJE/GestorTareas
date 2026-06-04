import React from 'react';
import "./Taskinput.css"

export const Taskinput = () => {
    return(
        <>
            <h1>Agregar Tareas</h1>
            <main id="In">
                <input type='text' placeholder="Agrega una nueva tarea..."/> 
                <button>Agregar +</button>
            </main>
            
        </>
    )
}