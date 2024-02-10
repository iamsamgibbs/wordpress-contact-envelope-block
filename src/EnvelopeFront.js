export default function EnvelopeFront({ fillColour = "white" }) {
	return (
		<svg
			width="606"
			height="356"
			viewBox="0 0 606 356"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="envelope-front"
		>
			<path d="M300 258L559.808 64.5H40.1924L300 258Z" fill={fillColour} />
			<path
				d="M36.5 60.5L287.995 252.708C294.791 257.901 304.219 257.914 311.029 252.739L564 60.5"
				stroke="currentColor"
				stroke-width="6"
			/>
		</svg>
	);
}
