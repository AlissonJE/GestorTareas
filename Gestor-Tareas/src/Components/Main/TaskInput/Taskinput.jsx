import React from 'react';
import "./Taskinput.css"

export const Taskinput = () => {
    return(
        <>
            <h1 className="AT">Agregar Tareas</h1>
            <main className="BC">
                <main className="In">
                    <input type='text' placeholder="Agrega una nueva tarea..."/> 
                </main>
                <div className="BT">
                    <button>Agregar +</button>
                </div>
            </main>
            
        </>
    )
}