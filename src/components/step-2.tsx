import { useStepCtx } from "../App";
import { CardLayout } from "./card-layout";
import { Input } from "./input";

export const Step2 = () => {
	const { step, nextStep, prevStep, state } = useStepCtx();

	if (step !== 2) {
		return null;
	}

	return (
		<CardLayout
			className={step === 2 ? "animate-slide " : " animate-fade absolute"}>
			<p className="text-2xl">MORE INFO</p>
			<p className="mb-3">This is Step 2</p>

			<Input label={"Date of Birth"} />
			<Input label={"Address"} />

			<div className="flex w-full items-center justify-center space-x-4">
				<button
					onClick={prevStep}
					className="bg-green-400 text-white py-4 w-1/3 hover:bg-opacity-70 cursor-pointer">
					{" "}
					Previous
				</button>
				<button
					onClick={nextStep}
					className="bg-green-400 text-white w-1/3 py-4 hover:bg-opacity-70 cursor-pointer">
					{" "}
					Next
				</button>
			</div>
		</CardLayout>
	);
};
