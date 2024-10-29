/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import css from "./espeenPageContent.module.css"
import { useTranslation } from "react-i18next";
import TextWithAir from "src/components/text/textWithAir/textWithAir";
import { teamMembers } from "src/store/Team";
import TeamMemberCard from "src/components/card/teamMember/teamMemberCard";

/* ----- COMPONENT ----- */
const EspeenPageContent: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={css.container}>
            <TextWithAir left={false}>
                <div className="textStyle-huge">Espeen</div>
                <div className="textStyle-title">{t('espeen.moto')}</div>
                <div className="textStyle-text">{t('espeen.presentation')}</div>
            </TextWithAir>
            <TextWithAir>
                <div className="textStyle-huge">{t('espeen.team_presentation')}</div>
                <div className="textStyle-text">{t('espeen.team_description')}</div>
            </TextWithAir>
            {
                teamMembers.map((member, index) => (
                    <TextWithAir key={index} left={index % 2 !== 0}>
                        <TeamMemberCard member={member} left={index % 2 !== 0} />
                    </TextWithAir>
                ))
            }
        </div>
    );
};

export default EspeenPageContent;