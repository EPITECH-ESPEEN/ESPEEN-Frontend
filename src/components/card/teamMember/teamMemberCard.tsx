/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import css from "./teamMemberCard.module.css"
import { ITeamMember } from "src/types/Team";
import { useTranslation } from "react-i18next";


/* ----- COMPONENT ----- */
interface TeamMemberCardProps {
    member: ITeamMember;
    left: boolean;
}


/* ----- COMPONENT ----- */
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, left }) => {
    const { t } = useTranslation();

    return (
        <div className={css.card}>
            <div className={`${css.textContainer} ${left ? css.left : css.right}`}>
                <div className="textStyle-cardTitle">{member.name}</div>
                <div className="textStyle-cardText">{t(`team.${member.role}`)}</div>
            </div>
            <div className={css.pictureContainer}>
                <img src={member.picture} alt={member.name} className={css.picture} />
            </div>
        </div>
    );
};

export default TeamMemberCard;