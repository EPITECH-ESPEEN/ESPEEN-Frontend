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
import { useGetGoogleAuthQuery } from "../../redux/api/googleServiceApi";

/* ----- PROPS ----- */
interface ServiceCardProps {
  service: IService;
}

/* ----- COMPONENT ----- */
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { t } = useTranslation();

  const { data: googleAuthData } = useGetGoogleAuthQuery({});

  //   const callPath = async (action: IServiceButton) => {
  //     // axios -> call /api/auth
  //     // window.location.href = `${process.env.BACKEND_HOST}/${action.path}`;

  //     const response = await axios.get("http://localhost:4242/api/auth");
  //     const { authUrl } = response.data;
  //     console.log(authUrl);

  //     if (authUrl) {
  //       window.location.href = authUrl;
  //     }
  //     navigate(action.path);

  const callPath = (action: IServiceButton) => {
    if (action.name !== "not_linked") {
      window.location.href = action.path;
      //   //   if (googleAuthData?.url) {
      //   //     console.log("Hook");
      //   //     window.location.href = googleAuthData.url;
      //   //   } else {
      //   //     console.log("Hello world");
      //   //   }
      // } else {
      //   console.log(`${action.name} : ${action.path}`);
    }
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
