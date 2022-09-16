import React from "react";

//@ts-ignore
export const Input = ({ label }) => {
	return (
		<div className="flex flex-col space-y-1 items-start justify-start w-full">
			<label htmlFor="input" className="text-left text-lg font-medium">
				{label}
			</label>
			<input
				id={label}
				type="text"
				className="w-full rounded-lg h-14 focus:outline-none py-4 border-2 border-neutral-400 focus:ring-1 focus:ring-primary-100"
			/>
		</div>
	);
};
