import React from "react";
import { useState } from "react";
import { useStepCtx } from "../App";
import { CardLayout } from "./card-layout";
import { Input } from "./input";

export const Step3 = () => {
	const { prevStep, step } = useStepCtx();

	if (step !== 3) {
		return null;
	}

	return (
		<CardLayout
			className={step === 3 ? "animate-slide" : " animate-fade absolute"}>
			<p className="text-2xl">LAST BUT NOT LEAST</p>
			<p className="mb-3">This is Step 3</p>

			<Input label={"Phone"} />

			<p className="mb-4">THANK YOU FOR THE TIME !</p>

			<button
				onClick={() => {
					prevStep();
				}}
				className="bg-green-400 text-white py-4 w-1/3 hover:bg-opacity-70 cursor-pointer">
				{" "}
				Previous
			</button>
		</CardLayout>
	);
};
