import { UserRound, Lock } from "lucide-react";

const AuthForm: React.FC = () => {
    return (
        <div >
            <button className="bg-[#408C60] text-white font-bold py-2 px-4 rounded-tl-lg shadow-md">Log In</button>
            <button className="bg-transparent text-white font-bold py-2 px-4 rounded-tr-lg">Sign In</button>
    
            <div className="login_card rounded-lg shadow-lg relative">
                <form className="space-y-4">
        
                    <div className="relative">
                        <UserRound
                            size={24}
                            color="white"
                            className="absolute"
                        />
                        <input
                            type="text"
                            className="pl-10 rounded-lg border-none text-white bg-transparent border-2 border-white"
                            placeholder="Enter a username..."
                        />
                    </div>
        
                    <div className="relative">
                        <input type="password" className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-[#408C60] placeholder-gray-500 text-white bg-transparent border-2 border-white" placeholder="Enter a password..." />
                        <Lock />
                    </div>

                    <div className="flex justify-between mt-8">
                        <button type="reset" className="py-2 px-6 bg-transparent border-3 border-white text-white rounded-lg hover:bg-white hover:border-6 transition duration-300">Reset</button>
                        <button type="submit" className="py-2 px-6 bg-transparent border-3 border-white text-white text-bold rounded-lg hover:bg-white hover:text-[#50C878] transition duration-300">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default AuthForm;