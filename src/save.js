import { useBlockProps } from "@wordpress/block-editor";

import EnvelopeBack from "./EnvelopeBack";
import EnvelopeFront from "./EnvelopeFront";

export default function save({ attributes }) {
	const { selectedPageLink } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<a href={selectedPageLink}>
				<EnvelopeFront />
				<EnvelopeBack />
			</a>
		</div>
	);
}
