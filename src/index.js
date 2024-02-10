import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

const attributes = {
	selectedPageId: {
		type: "number",
		default: -1,
	},
	selectedPageLink: {
		type: "string",
		default: "#",
	},
};

const supports = {};

registerBlockType(metadata.name, {
	attributes,
	supports,
	edit: Edit,
	save,
});
