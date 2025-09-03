
import React from "react";
import ResetSenhaForm from "./components/ResetSenhaForm";
import WelcomeSection from "./components/WelcomeSection";

const ResetSenha = () => {
	React.useEffect(() => {
		document.body.classList.remove('with-navbar');
		return () => {
			document.body.classList.add('with-navbar');
		};
	}, []);
	return (
		<div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-400 via-purple-400 to-blue-600 relative">
			<div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-blue-600 opacity-80 -z-10" />
			<div className="flex flex-col md:flex-row items-center justify-between w-full h-full px-6 py-10 md:py-0 md:px-20 gap-10 md:gap-0">
				<div className="flex flex-col gap-10 md:gap-20 justify-center md:h-screen md:w-1/2">
					<WelcomeSection />
				</div>
				<div className="flex flex-col justify-center md:h-screen md:w-1/2 w-full">
					<ResetSenhaForm />
				</div>
			</div>
		</div>
	);
};

export default ResetSenha;
