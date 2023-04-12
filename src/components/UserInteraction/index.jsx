import { useState } from "react";
import style from "./style.module.css";

export const UserInteraction = ({ setUserInputGlobal }) => {
    const [userInputLocal, setUserInputLocal] = useState("");

    const handleClick = () => setUserInputGlobal(userInputLocal);

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Insira o nome do(a) personagem" aria-label="Character's name" aria-describedby="button-addon2" onChange={(event) => setUserInputLocal(event.target.value.toLowerCase())} value={userInputLocal} />
                <button className={`btn ${style.btn}`} type="button" id="button-addon2" onClick={handleClick}>OK</button>
            </div>
            <div className="d-flex justify-content-center">
                <button>COMO JOGAR</button>
                <button>REINICIAR</button>
                <button>PULAR</button>
                <button>DICA</button>
            </div>
        </div>
    )
}