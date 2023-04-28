import { HeartIcon } from "../HeartIcon";
import { TicketIcon } from "../TicketIcon";
import style from "./style.module.css";

export const UserInfo = ({ lifeAmount, hintAmount }) => {

    let lifeArray = Array.from({ length: lifeAmount });

    return (
        <ul className={`bg-white rounded-4 p-3 shadow list-unstyled ${style.userInfoContainer}`}>
            <li className="d-flex justify-content-between align-items-center">
                <p>VIDAS</p>
                <span className="d-flex justify-content-end">
                    {lifeArray.map((e, key) => { return <HeartIcon key={key} /> })}</span>
            </li>
            <li className="d-flex justify-content-between align-items-center">
                <p>DICAS</p>
                <span className="d-flex justify-content-end"><TicketIcon /><TicketIcon /><TicketIcon /></span>
            </li>
            <li className="d-flex justify-content-between align-items-center">
                <p>PONTOS</p>
                <p className="fs-1">100</p>
            </li>

        </ul>
    )
}