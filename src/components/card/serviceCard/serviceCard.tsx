/*
        Author:
        >> Caroline BOILLY - { caroline.boilly@epitech.eu }
        >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

        („• ֊ •„)❤    <    Have a good day !
        --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import { useTranslation } from "react-i18next";
import { IService, IServiceButton } from "src/types/Services";
import css from "./serviceCard.module.css";
import ColoredButton from "src/components/buttons/colored/coloredButton";
import { getBaseUrl } from "src/services/fetch";

/* ----- PROPS ----- */
interface ServiceCardProps {
    service: IService;
}

/* ----- COMPONENT ----- */
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const { t } = useTranslation();

    const callPath = async (action: IServiceButton) => {
        window.location.href = `${getBaseUrl()}/${action.path}`;
    };

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
