import { useEffect, useState } from "react";
import style from "./style.module.css";

import { BsQuestionLg } from 'react-icons/bs';
import { TiArrowRepeat } from 'react-icons/ti';
import { HiFastForward } from 'react-icons/hi';
import { IoTicket } from 'react-icons/io5';
import { HiVolumeUp } from 'react-icons/hi';
import { HiVolumeOff } from 'react-icons/hi';

import { UserAssistant } from "../UserAssistant";
import Modal from 'react-modal';

import helpImages from '../../data/help';

Modal.setAppElement('#root');

export const UserInteraction = ({ setUserInputGlobal, setGameStarted, gameEnded, skipQuestion, hints, hintAmount, askForAHint, points, soundEffectsOn, setSoundEffectsOn }) => {
    const [userInputLocal, setUserInputLocal] = useState("");

    const handleInputSubmit = () => {
        setUserInputGlobal(userInputLocal);
        setGameStarted(true);
        setUserInputLocal("")
    };

    const [assistantMessage, setAssistantMessage] = useState("");

    useEffect(() => {
        if (!gameEnded) {
            setAssistantMessage("Sou Lenny, seu assistente virtual. Clique em (?) para aprender a jogar.")
        }
    }, [hints])

    useEffect(() => {
        if (gameEnded) {
            setAssistantMessage(`Fim de jogo! Sua pontuação foi: ${points}. Clique em (⟲) para reiniciar o jogo.`);
        };
    }, [gameEnded])

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleClickMenu = option => {
        let message;
        switch (option) {
            case "help":
                openModal();
                message = "Após inserir a resposta, pressione Enter ou clique em OK.";
                break;
            case "restart":
                message = "Reiniciando...";
                restartGame();
                break;
            case "soundToggle":
                setSoundEffectsOn(!soundEffectsOn);
                message = soundEffectsOn ? "Som desabilitado." : "Som habilitado.";
                break;
            case "skip":
                message = "Sério que você não sabia?";
                skipQuestion();
                break;
            case "hint":
                message = hints[0];
                hints.shift();
                askForAHint();
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

                <button className={`btn ${style.btn}`} onClick={() => handleClickMenu("soundToggle")} title="Efeitos sonoros">
                    {soundEffectsOn ? <HiVolumeOff /> : <HiVolumeUp />}
                </button>

                <button className={`btn ${style.btn}`} onClick={() => handleClickMenu("skip")} title="Pular" disabled={gameEnded}><HiFastForward /></button>

                {/* hintAmount is zero when there are not hints availables. Zero is a falsy value, so disable attribute becomes true. */}
                <button className={`btn ${style.btn}`} onClick={() => handleClickMenu("hint")} title="Dica" disabled={!hintAmount || gameEnded}><IoTicket /></button>
            </div>
            <UserAssistant message={assistantMessage} />
            <div className="input-group">
                <input disabled={gameEnded} type="text" className="form-control" placeholder="Insira o nome do(a) personagem" aria-label="Character's name" aria-describedby="button-addon2" onChange={(event) => setUserInputLocal(event.target.value.toLowerCase())} value={userInputLocal} onKeyDown={handleEnterKeyPress} />
                <button className={`btn ${style.btn}`} type="button" id="button-addon2" onClick={handleInputSubmit}>OK</button>
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} className={style.modalContent} overlayClassName={style.modalOverlay}>
                <img className="w-75" src={helpImages[modalImageIndex]} alt="Ajuda" />
                <div className="d-flex gap-5">
                    <button className={`btn ${style.btn}`} onClick={() => setModalImageIndex(modalImageIndex - 1)} disabled={true && !modalImageIndex}>&#10094;</button>
                    <button className={`btn ${style.btn}`} onClick={() => setModalImageIndex(modalImageIndex + 1)} disabled={modalImageIndex === (helpImages.length - 1)}>&#10095;</button>
                    <button onClick={closeModal} className={`float-right btn ${style.btn}`}>&#128473;</button>
                </div>
            </Modal>
        </div>
    )
}