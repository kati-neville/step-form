import React from "react";
import { useStepCtx } from "../App";
import { CardLayout } from "./card-layout";
import { Input } from "./input";

export const Step1 = () => {
	const { step, nextStep } = useStepCtx();

	if (step !== 1) {
		return null;
	}

	return (
		<CardLayout
			className={step === 1 ? "animate-slide" : "animate-fade absolute"}>
			<p className="text-2xl">CREATE YOUR ACCOUNT</p>
			<p className="mb-3">This is Step 1</p>

			<Input label={"Name"} />
			<Input label={"Email"} />

			<button
				onClick={nextStep}
				className="bg-green-400 text-white w-1/3 py-4 hover:bg-opacity-70 cursor-pointer">
				{" "}
				Next
			</button>
		</CardLayout>
	);
};
