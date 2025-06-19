import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () =>
{
    const [nuevaTarea, setNuevaTarea] = useState<string>("");
    const [listaTareas, setListaTareas] = useState<string[]>([]);

    const handleAddTask = (e: React.FormEvent) =>
    {
        e.preventDefault();
        if (nuevaTarea.trim() === "") return; // No añadir tareas vacías
        console.log("Tarea añadida:", nuevaTarea);
        setListaTareas([...listaTareas, nuevaTarea]);
        setNuevaTarea(""); // Limpiar el campo de entrada
    };

    const handleBorrarTarea = (index: number) =>
    {
        const nuevasTareas = listaTareas.filter((_, i) => i !== index);
        setListaTareas(nuevasTareas);
    };

    return (
        <div className="flex">
            <h1>Lista de Tareas</h1>
            <div>
                <input type="text" 
                       value={nuevaTarea}
                       onChange={(e) => setNuevaTarea(e.target.value)}
                       placeholder="Añadir nueva tarea..."
                       />
                       <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} />
        </div>
    );
};
