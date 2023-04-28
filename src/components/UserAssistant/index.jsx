import { useState } from "react";
import style from "./style.module.css";

export const UserAssistant = ({ message }) => {
    const lennyFaces = ["( ͡❛ ͜ʖ ͡❛)", "( ͡ᵔ ͜ʖ ͡ᵔ)", "( ͡° ʖ̯ ͡°)"];

    const [lennyFace, setLennyFace] = useState(lennyFaces[0]);

    return (
        <div>
            <p className={`rounded bg-white text-center ${style.assistantText}`}> <span>{lennyFace}</span> {message}</p>
        </div>
    )
}