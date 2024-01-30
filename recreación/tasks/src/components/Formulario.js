import React, { useState } from "react";
import "../stylesheets/tarea-formulario.css"
import { v4 as uuidv4 } from "uuid"
import { FcPuzzle } from "react-icons/fc";

export default function Formulario(props) {
    const [input, setInput] = useState("")

    const manejarEnvio = e => {
        e.preventDefault()
        e.target.value = ""
        const nuevatarea = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(nuevatarea)
    }

    const manejarCambio = e => {
        setInput(e.target.value)
    }

    function alertar(param) {
        alert(param)
    }

    return (
        <>
            <form
                onSubmit={manejarEnvio}
                className="contenedor-formulario"
            >
                <input type="text" placeholder="ingresa una tarea" onChange={manejarCambio} className="formulario" />
                <button type="submit" className="boton-enviar-formulario">
                    <FcPuzzle size="20px" />
                </button>
            </form>
        </>
    )
}