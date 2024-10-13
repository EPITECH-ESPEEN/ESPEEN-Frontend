/*
    Author:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import React from "react";
import { useTranslation } from "react-i18next";
import { IService, IServiceButton } from "../../types/Services";
import css from "./serviceCard.module.css";
import ColoredButton from "../buttons/colored/coloredButton";
import { getBaseUrl } from "../../services/fetch";


/* ----- PROPS ----- */
interface ServiceCardProps {
    service: IService;
}

/* ----- COMPONENT ----- */
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const { t } = useTranslation();

    const callPath = async (action: IServiceButton) => {
            window.open(
                `${getBaseUrl()}/${action.path}`,
                '_blank'
            );
    }

    return (
        <div className={css.container}>
            <img className={css.img} src={service.icon} alt="service icon" />
            <div className={css.textsContainer}>
                <div>
                    <div className="textStyle-text color-dark">{t("dico.name")}</div>
                    <div className="textStyle-title color-dark">{service.name}</div>
                </div>
                <div className={css.buttonContainer}>
                    <div className="textStyle-text color-dark">{t("dico.actions")}</div>
                    {service.buttons.map((action, index) => (
                        <ColoredButton key={index} label={t(`services.${action.name}`)} onClick={() => callPath(action)} color={action.name === "linked" ? "green" : action.name === "not_linked" ? "red" : "dark"} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
