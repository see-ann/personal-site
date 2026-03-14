import type { DiscColor } from "../logic/types";

type CellProps = {
	color: DiscColor | null;
};

export default function Cell({ color }: CellProps) {
	const bgColor =
		color === "RED"
			? "bg-[#1a1a1a]"
			: color === "YELLOW"
				? "bg-[#c8c4bc]"
				: "bg-[#fdf8ee]";

	return (
		<div
			className={`w-14 h-14 rounded-full border-[2.5px] border-[#1a1a1a] ${bgColor}`}
		/>
	);
}
