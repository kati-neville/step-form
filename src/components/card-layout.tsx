import React, { ReactNode } from "react";

export const CardLayout: React.FC<{
	children: ReactNode;
	className?: string;
}> = ({ children, className }) => {
	return (
		<div className={`w-1/3 bg-white rounded-lg shadow-lg ${className}`}>
			<div className="flex flex-col space-y-4 items-center justify-center w-full px-12 py-4 rounded-lg">
				{children}
			</div>
		</div>
	);
};
