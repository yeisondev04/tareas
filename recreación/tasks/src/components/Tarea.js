import React from "react";
import { SlClose } from "react-icons/sl"
import { FcCheckmark } from "react-icons/fc";
import "../stylesheets/tarea.css"

export default function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
    return (
        <div className={completada ? "task completada" : "task"} key={id}>
            <div onClick={() => completarTarea(id)} className="tarea-texto">
                {texto}
            </div>
            {completada ? <FcCheckmark onClick={() => eliminarTarea(id)} /> : <SlClose onClick={() => eliminarTarea(id)} />}
        </div>
    )
}
