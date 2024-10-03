/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- COMPONENT ----- */
// TODO: Fix color attribute, mobile responsiveness
const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full p-4 hidden md:flex">
            <div className="md:max-w-screen-3xl mx-auto flex items-center w-full justify-between">
                <p className="text-sm text-white/60">
                    © 2024 ESPEEN. All rights reserved.
                </p>
                <div className="space-x-14 text-sm text-white/60 md:w-auto flex items-center w-full">
                    <button >
                        Privacy Policy
                    </button>
                    <button >
                        Terms of Service
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;