const attributes = {
	icon: {
		type: 'string',
		source: 'attribute',
		selector: '.gt-icon-svg',
		attribute: 'data-icon',
	},
	textAlignment: {
		type: 'string',
	},
	iconLayout: {
		type: 'string',
		default: 'default',
	},
	iconSize: {
		type: 'string',
		default: 'normal',
	},
	iconPadding: {
		type: 'string',
		default: 'normal',
	},
	borderWidth: {
		type: 'string',
		default: 'normal',
	},
	textColor: {
		type: 'string',
	},
	backgroundColor: {
		type: 'string',
	},
	customTextColor: {
		type: 'string',
	},
	customBackgroundColor: {
		type: 'string',
	},
};

export default attributes;
