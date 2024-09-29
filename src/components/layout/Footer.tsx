// TODO: Fix color attribute
const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full p-4">
            <div className="md:max-w-screen-3xl mx-auto flex items-center w-full justify-between">
                <p className="text-sm text-gray-500">
                    © 2024 ESPEEN. All rights reserved.
                </p>
                <div className="space-x-14 text-sm text-gray-500 md:w-auto flex items-center w-full">
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