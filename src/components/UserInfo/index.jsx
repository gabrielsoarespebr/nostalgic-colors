import { HeartIcon } from "../HeartIcon";
import { TicketIcon } from "../TicketIcon";
import style from "./style.module.css";

export const UserInfo = () => {
    return (
        <ul className={`bg-white rounded-4 p-3 shadow list-unstyled ${style.userInfoContainer}`}>
            <li className="d-flex justify-content-between align-items-center">
                <p>VIDA</p>
                <span className="d-flex justify-content-end"><HeartIcon /><HeartIcon /><HeartIcon /></span>
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