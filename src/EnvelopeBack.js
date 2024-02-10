export default function EnvelopeBack({ fillColour = "white" }) {
	return (
		<svg
			width="606"
			height="356"
			viewBox="0 0 606 356"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="envelope-back"
		>
			<rect
				x="3"
				y="3"
				width="600"
				height="350"
				rx="44"
				fill={fillColour}
				stroke="currentColor"
				stroke-width="6"
			/>
			<path d="M40 318.5L194 178" stroke="currentColor" stroke-width="6" />
			<path d="M565 322.5L412.5 177.5" stroke="currentColor" stroke-width="6" />
		</svg>
	);
}
