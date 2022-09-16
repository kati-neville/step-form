import { createContext, useContext, useState } from "react";
import { Step1 } from "./components/step-1";
import { Step2 } from "./components/step-2";
import { Step3 } from "./components/step-3";

const stepCtx = createContext({
	state: false,
	step: 1,
	setStep: () => {},
	nextStep: () => {},
	prevStep: () => {},
});

export const useStepCtx = () => useContext(stepCtx);

function App() {
	const [step, setStep] = useState(1);
	const [state, setState] = useState(true);

	const nextStep = () => {
		setStep(currentStep => currentStep + 1);
	};
	const prevStep = () => {
		setStep(currentStep => currentStep - 1);
	};

	return (
		//@ts-ignore
		<stepCtx.Provider value={{ step, setStep, nextStep, prevStep, state }}>
			<div className="flex flex-col items-center justify-start space-y-5 mt-14 h-screen">
				<div className="flex items-center justify-center w-1/2">
					{Array(3)
						.fill(null)
						.map((item, idx) => {
							return (
								<div key={idx} className="relative mb-6">
									<div className=" flex items-center justify-center">
										<span
											className={`h-8 w-8 flex flex-col items-center justify-center rounded-md ${
												idx + 1 <= step
													? "bg-green-500 text-white"
													: "bg-white text-green-500"
											}`}>
											{idx + 1}
										</span>
										{idx === 2 ? null : (
											<span
												className={`h-1 w-48 ${
													idx + 1 <= step - 1 ? "bg-green-500" : "bg-white"
												}`}></span>
										)}
									</div>

									<span className="absolute -bottom-[90%] w-32 -left-[5%]  text-white text-lg">
										Step {idx + 1}
									</span>
								</div>
							);
						})}
				</div>

				<div className="flex flex-col items-center justify-center w-full relative">
					<Step1 />
					<Step2 />
					<Step3 />
				</div>
			</div>
		</stepCtx.Provider>
	);
}

export default App;
