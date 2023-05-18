import style from "./style.module.css";

export const Overlay = ({ character, showCharacter }) => {
    return (
        <>
            {!showCharacter && <div className={style.shapesContainer}>
                <div className={`rounded-4 ${style.shapeLg}`} style={{ backgroundColor: character.colors[2] }}>&nbsp;</div>
                <div className={`rounded-4 ${style.shapeMd}`} style={{ backgroundColor: character.colors[1] }}>&nbsp;</div>
                <div className={`rounded-4 ${style.shapeSm}`} style={{ backgroundColor: character.colors[0] }}>&nbsp;</div>
            </div>}
        </>
    )
}