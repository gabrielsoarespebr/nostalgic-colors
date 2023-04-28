import style from "./style.module.css";

export const Header = () => {
    return (
        <header className="text-center">
            <p className={style.brandName}>NOSTALGIC</p>
            <p className={style.brandName}>COLORS</p>
            {/* <a className={style.developerName} href="https://github.com/gabrielsoarespebr/nostalgic-colors" target="_blank">Desenvolvido por Gabriel Soares</a> */}
        </header>
    )
}