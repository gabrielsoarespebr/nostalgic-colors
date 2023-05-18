import { Overlay } from "../Overlay";
import style from "./style.module.css";

export const Character = ({ character, showCharacter }) => {
    return (
        <div className={`bg-white rounded-4 shadow ${style.characterContainer}`}>
            {showCharacter && <figure className={style.characterFigure}>
                <img src={character.photo} alt="characterPhoto" />
                <figcaption>
                    <p className="text-center">{character.name}</p>
                    <p className={style.context}>{character.context}</p>
                </figcaption>
            </figure>}
            {character.colors && <Overlay character={character} showCharacter={showCharacter} />}
        </div>
    )
}