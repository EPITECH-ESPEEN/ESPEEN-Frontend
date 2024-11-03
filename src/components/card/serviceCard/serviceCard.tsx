/*
        Author:
        >> Caroline BOILLY - { caroline.boilly@epitech.eu }
        >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

        („• ֊ •„)❤    <    Have a good day !
        --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IService, IServiceButton } from "src/types/Services";
import css from "./serviceCard.module.css";
import ColoredButton from "src/components/buttons/colored/coloredButton";
import { getBaseUrl } from "src/services/fetch";
import { isServiceLinked } from "src/services/services";
import LoaderPage from "src/components/loading/loaderPage";
import Modal from "src/components/modal/default/modal";

/* ----- PROPS ----- */
interface ServiceCardProps {
    service: IService;
}

/* ----- COMPONENT ----- */
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const [isLinked, setIsLinked] = useState<boolean | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const { t } = useTranslation();

    const callPath = async (action: IServiceButton) => {
        setShowModal(true);
        window.open(`${getBaseUrl()}/${action.path}`, "_blank");
    };

    useEffect(() => {
        const getDatas = async () => {
            const linked = await isServiceLinked(service.name);
            setIsLinked(linked);
        };
        if (isLinked === null) {
            getDatas();
        }
    }, [isLinked, service.name]);

    if (isLinked === null) {
        return <LoaderPage />;
    }

    return (
        <>
            <div className={css.container}>
                <img className={css.img} src={service.icon} alt="service icon" />
                <div className={css.textsContainer}>
                    <div>
                        <div className="textStyle-text color-dark">{t("dico.name")}</div>
                        <div className="textStyle-title color-dark">{service.name}</div>
                    </div>
                    {
                        service.buttons.length > 0 &&
                        <div className={css.buttonContainer}>
                            <div className="textStyle-text color-dark">{t("dico.actions")}</div>
                            {service.buttons.map((action, index) => {
                                if (action.name === "logout" && !isLinked) return null;
                                if (action.name === "not_linked" && isLinked) return null;
                                return <ColoredButton key={index} label={t(`services.${action.name}`)} onClick={() => callPath(action)} color={action.name === "linked" ? "green" : action.name === "not_linked" ? "red" : "dark"} />
                            })}
                        </div>
                    }
                </div>
            </div>
            {showModal &&
                <Modal onClose={() => setShowModal(false)}>
                    <div className="color-dark textStyle-title">
                        {t("dico.please_reload")}
                    </div>
                </Modal>
            }
        </>
    );
};

export default ServiceCard;
