import style from "./style.module.css";

export const Header = () => {
    return (
        <header className="text-center">
            <a className="text-decoration-none" href="https://github.com/gabrielsoarespebr/nostalgic-colors" target="_blank">
                <p className={style.brandName}>NOSTALGIC</p>
                <p className={style.brandName}>COLORS</p>
            </a>
        </header>
    )
}