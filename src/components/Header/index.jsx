import style from "./style.module.css";

export const Header = () => {
    return (
        <header className="d-flex flex-column align-items-center cursor-pointer">
            <p className={style.brandName}>NOSTALGIC</p>
            <p className={style.brandName}>COLORS</p>
        </header>
    )
}