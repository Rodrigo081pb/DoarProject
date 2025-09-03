import React from "react";
import RegisterForm from "../Register/components/RegisterForm";

const Register = () => {
    React.useEffect(() => {
        document.body.classList.remove('with-navbar');
        return () => {
            document.body.classList.add('with-navbar');
        };
    }, []);
    return (
        <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-400 via-purple-400 to-blue-600 relative">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-blue-600 opacity-80 -z-10" />
            <RegisterForm />
        </div>
    );
};

export default Register;
