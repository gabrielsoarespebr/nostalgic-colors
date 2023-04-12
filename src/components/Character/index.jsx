import style from "./style.module.css";

export const Character = ({ characterPhoto }) => {
    return (
        <div className={`bg-white rounded-4 shadow ${style.characterContainer}`}>
            <img className="col-2" src={characterPhoto} alt="characterPhoto" />

        </div>
    )
}