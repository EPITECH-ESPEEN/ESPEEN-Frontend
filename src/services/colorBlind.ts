/*
    Author:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import { ISelecterItem } from "src/types/Selecter";


/* ----- DATAS ----- */
let colorBlind: string = "";

export const colorBlindSelecterItem: ISelecterItem[] = [
    {
        label: "color_blind.default",
        value: "",
    },
    {
        label: "color_blind.protanopia",
        value: "protanopia",
    },
    {
        label: "color_blind.deuteranopia",
        value: "deuteranopia",
    },
    {
        label: "color_blind.tritanopia",
        value: "tritanopia",
    },
    {
        label: "color_blind.achromatopsia",
        value: "achromatopsia",
    }
];


/* ----- FUNCTIONS ----- */
export function changeColorBlind(value: string) {
    colorBlind = value;
    localStorage.setItem("colorBlind", value);

    if (value === "")
        document.documentElement.removeAttribute("color-blind");
    else
        document.documentElement.setAttribute("color-blind", value);
}

export function setDefaultColorBlind() {
    const colorBlindValue = localStorage.getItem("colorBlind");
    if (colorBlindValue)
        colorBlind = colorBlindValue;
    else
        colorBlind = "";
    changeColorBlind(colorBlind);
}

export function getColorBlind() {
    return colorBlindSelecterItem.find((item) => item.value === colorBlind) || null;
}