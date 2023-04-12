import style from "./style.module.css";

export const Character = ({ character }) => {
    return (
        <div className={`bg-white rounded-4 shadow d-flex justify-content-center align-items-center ${style.characterContainer}`}>
            <img className={style.characterPhoto} src={character.photo} alt="characterPhoto" />
        </div>
    )
}