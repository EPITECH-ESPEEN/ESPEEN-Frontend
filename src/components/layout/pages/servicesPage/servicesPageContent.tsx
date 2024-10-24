/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useEffect, useState } from "react";
import css from "./servicesPageContent.module.css";
import { getServices } from "src/store/Services";
import { IService } from "src/types/Services";
import Loader from "src/components/loading/loader";
import ServiceCard from "src/components/card/serviceCard/serviceCard";
import InputWithIcon from "src/components/inputs/withIcon/withIcon";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";

/* ----- COMPONENT ----- */
const ServicesPageContent: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const [services, setServices] = useState<IService[]>([]);
    const [filteredServices, setFilteredServices] = useState<IService[]>([]);
    const { t } = useTranslation();

    function updateSearch(search: string) {
        setSearch(search);
        setFilteredServices(services.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase())));
    }

    useEffect(() => {
        const fetchData = async () => {
            const services = await getServices();
            const tmp: IService[] = [];
            services.forEach((service) => {
                tmp.push(service);
            });
            setServices(tmp);
            setFilteredServices(tmp);
        };
        fetchData();
    }, []);

    if (services.length === 0)
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80vh",
                }}
            >
                <Loader />
            </div>
        );

    return (
        <div className={css.container}>
            <div className={css.searchContainer}>
                <InputWithIcon icon={<Search size={28} color="var(--color-light)" />} type="text" value={search} setValue={updateSearch} placeholder={t("services.search")} />
            </div>
            <div className={css.servicesContainer}>
                {filteredServices.map((service: IService) => (
                    <ServiceCard key={service.uid} service={service} />
                ))}
            </div>
        </div>
    );
};

export default ServicesPageContent;
