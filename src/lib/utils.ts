/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


/* ----- FUNCTIONS ----- */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
