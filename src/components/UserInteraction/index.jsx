import { useEffect, useState } from "react";
import style from "./style.module.css";
import { BsQuestionLg } from 'react-icons/bs';
import { TiArrowRepeat } from 'react-icons/ti';
import { HiFastForward } from 'react-icons/hi';
import { IoTicket } from 'react-icons/io5';
import { UserAssistant } from "../UserAssistant";

export const UserInteraction = ({ setUserInputGlobal, setGameStarted, gameEnded, skipQuestion, points }) => {
    const [userInputLocal, setUserInputLocal] = useState("");

    const handleInputSubmit = () => {
        setUserInputGlobal(userInputLocal);
        setGameStarted(true);
        setUserInputLocal("")
    };

    const [assistantMessage, setAssistantMessage] = useState("Olá! Sou Lenny, seu assistente virtual. Clique em (?) para aprender a jogar.");

    useEffect(() => {
        if (gameEnded) {
            setAssistantMessage(`Fim de jogo! Sua pontuação foi: ${points}. Clique em (⟲) para reiniciar o jogo.`);
        };
    }, [gameEnded])

    const handleClickMenu = option => {
        let message;
        switch (option) {
            case "help":
                message = "O objetivo do jogo é adivinhar o personagem com base nas cores.";
                setTimeout(() => { setAssistantMessage("Clique em (⟲) para reiniciar o jogo, (⯮) para pular questão e (🎟) para receber dicas.") }, 5000);
                setTimeout(() => { setAssistantMessage("São 3 dicas por personagem. E cuidado: errar/pular questão custa 1 vida.") }, 12000);
                setTimeout(() => { setAssistantMessage("O jogo termina quando as vidas acabam. Estarei aqui se precisar. Bom jogo!") }, 20000);
                break;
            case "restart":
                message = "Reiniciando...";
                restartGame();
                break;
            case "skip":
                message = "Sério que você não sabia? Lembre-se que pular a questão custa 1 vida.";
                skipQuestion();
                break;
            case "hint":
                message = "Dica.";
                break;
            default:
                message = "Opção inválida.";
                break;
        }
        setAssistantMessage(message);
    }

    const handleEnterKeyPress = e => {
        if (e.key === 'Enter') {
            handleInputSubmit()
        }
    }

    const restartGame = () => {
        window.location.reload();
    }

    return (
        <div className={style.interactionContainer}>
            <div className="d-flex justify-content-around">
                <button className={`btn ${style.btn}`} onClick={() => handleClickMenu("help")} title="Como jogar"><BsQuestionLg /></button>
                <button className={`btn ${style.btn}`} onClick={() => handleClickMenu("restart")} title="Reiniciar"><TiArrowRepeat /></button>
                <button className={`btn ${style.btn}`} onClick={() => handleClickMenu("skip")} title="Pular"><HiFastForward /></button>
                <button className={`btn ${style.btn}`} onClick={() => handleClickMenu("hint")} title="Dica"><IoTicket /></button>
            </div>
            <UserAssistant message={assistantMessage} />
            <div className="input-group">
                <input disabled={gameEnded} type="text" className="form-control" placeholder="Insira o nome do(a) personagem" aria-label="Character's name" aria-describedby="button-addon2" onChange={(event) => setUserInputLocal(event.target.value.toLowerCase())} value={userInputLocal} onKeyDown={handleEnterKeyPress} />
                <button className={`btn ${style.btn}`} type="button" id="button-addon2" onClick={handleInputSubmit}>OK</button>
            </div>
        </div>
    )
}