import { UserRound, Lock } from "lucide-react";
import { useState } from "react";

import TabButton from "./TabButton";

const AuthForm: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("");

    const handleTabClick = (label: string) => {
        setActiveTab(label);
    }

    return (
        <div className="flex flex-col items-center">
{/* TODO: Fix TabButton mb */}
            <div className="flex w-[500px]">
                <TabButton
                    label="Login"
                    isActive={activeTab === "Login"}
                    onClick={() => handleTabClick("Login")}
                />
                <TabButton
                    label="Sign Up"
                    isActive={activeTab === "Sign Up"}
                    onClick={() => handleTabClick("Sign Up")}
                />
            </div>
{/* TODO: InputText component */}
            <div className="login_card flex items-center flex-col  w-[500px]">
                <form className="space-y-4">
        
                <div className="flex items-center bg-transparent border-3 border-white rounded-2xl px-4 py-2 w-full">
                <UserRound size={28} color="white" className="mr-6"/>
                    <input type="text"
                        className="bg-transparent placeholder-white/60 focus:outline-none focus:ring-0 w-full"
                        placeholder="Enter an username..."
                    />
                </div>

                <div className="flex items-center bg-transparent border-3 border-white rounded-2xl px-4 py-2 w-full">
                    <Lock size={28} color="white" className="mr-6"/>
                    <input type="text"
                        className="bg-transparent placeholder-white/60 focus:outline-none focus:ring-0 w-full"
                        placeholder="Enter a password..."
                    />
                </div>
        
{/* TODO: InputButton component */}
                    <div className="flex justify-around pt-10">
                        <button type="reset" className="py-2 px-6 bg-transparent border-3 border-white font-semibold rounded-2xl 
                            hover:shadow-2xl transition duration-300">
                            Reset
                        </button>
                        <button type="submit" className="py-2 px-6 bg-transparent border-3 border-white font-semibold rounded-2xl
                            hover:shadow-2xl transition duration-300">
                            Login
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
};

export default AuthForm;