import { __ } from "@wordpress/i18n";

import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	Spinner,
	ComboboxControl,
} from "@wordpress/components";
import { store as coreStore } from "@wordpress/core-data";
import { useSelect } from "@wordpress/data";

import "./editor.scss";

import EnvelopeBack from "./EnvelopeBack";
import EnvelopeFront from "./EnvelopeFront";

export default function Edit({ attributes, setAttributes }) {
	const { selectedPageId, selectedPageLink } = attributes;

	const pages = useSelect((select) => {
		return select(coreStore).getEntityRecords("postType", "page", {
			per_page: -1,
		});
	}, []);

	function updateselectedPage(pageId) {
		const newSelectedPage = pages.find((page) => page.id === pageId);
		if (!newSelectedPage) return;
		setAttributes({
			selectedPageId: newSelectedPage.id,
			selectedPageLink: newSelectedPage.link,
		});
	}

	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody>
						{pages ? (
							<ComboboxControl
								label={__("Select contact page", "envelope")}
								onChange={updateselectedPage}
								options={pages.map((page) => ({
									label: page.title.rendered,
									value: page.id,
								}))}
								value={selectedPageId || null}
							/>
						) : (
							<Spinner />
						)}
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...useBlockProps()}>
				<a href={selectedPageLink}>
					<EnvelopeFront />
					<EnvelopeBack />
				</a>
			</div>
		</>
	);
}
