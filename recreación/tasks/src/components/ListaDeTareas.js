import React, { useState, useEffect } from "react"
import Tarea from "./Tarea"
import Formulario from "./Formulario"
import "../stylesheets/tarea-formulario.css"

export default function ListaDeTareas() {
    const [tareas, setTareas] = useState([])

    useEffect(() => {
        const tareasGuardadas = localStorage.getItem("tareas")
        if (tareasGuardadas) {
            setTareas(JSON.parse(tareasGuardadas))
        }
    }, [])

    const agregarTarea = tarea => {
        const tareaExistente = tareas.find(t => t.texto === tarea.texto)
        if (!tarea.texto.trim() || tareaExistente) {
            return
        }
        const tareasActualizadas = [tarea, ...tareas]
        setTareas(tareasActualizadas)
        localStorage.setItem("tareas", JSON.stringify(tareasActualizadas))
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTareas(tareasActualizadas)
        localStorage.setItem("tareas", JSON.stringify(tareasActualizadas))
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada
            }
            return tarea
        })
        setTareas(tareasActualizadas)
        localStorage.setItem("tareas", JSON.stringify(tareasActualizadas))
    }

    return (
        <>
            <Formulario
                onSubmit={agregarTarea}
            />

            {tareas.length === 0 ? (
                <h6 style={{textAlign: "center",color: "#99c",fontWeight: "100"}}>no hay tareas aún</h6>
            ) : (
                <div className="tareas-contenedor">
                    {
                        tareas.map(tarea =>
                            <Tarea
                                key={tarea.id}
                                id={tarea.id}
                                texto={tarea.texto}
                                completada={tarea.completada}
                                completarTarea={completarTarea}
                                eliminarTarea={eliminarTarea}
                            />
                        )
                    }
                </div>
            )}


        </>
    )
}
