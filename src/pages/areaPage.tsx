/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MetaData from "src/components/layout/metaData";
import AreaPageContent from "src/components/layout/pages/areaPage/areaPageContent";
import LoaderPage from "src/components/loading/loaderPage";
import Modal from "src/components/modal/default/modal";
import { atLeastOneActionReaction } from "src/services/services";


/* ----- COMPONENT ----- */
const AreaPage: React.FC = () => {
    const [has, setHas] = useState<boolean | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchData = async () => {
            const response = await atLeastOneActionReaction();
            setHas(response);
        };
        fetchData();
    }, []);

    if (has === null)
        return <LoaderPage />

    return (
        <div>
            <MetaData title="AREA" />
            { has ?
                <AreaPageContent />
                :
                <Modal onClose={() => {}}>
                    <div className="p-2 gap-3 flex flex-column">
                        <div className="color-dark textStyle-cardTitle text-center">
                            {t("area.no_action_reaction")}
                        </div>
                        <div className="color-dark textStyle-cardText text-center">
                            {t("area.subscribe_action_reaction")}
                        </div>
                    </div>
                </Modal>
            }
        </div>
    );
};

export default AreaPage;