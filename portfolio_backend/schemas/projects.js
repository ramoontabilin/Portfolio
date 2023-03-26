export default {
	name: 'projects',
	title: 'Projects',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hostspot: true
			}
		},
		{
			name: 'sourceLink',
			title: 'Source Code Link',
			type: 'url',
		},
		{
			name: 'deploymentLink',
			title: 'Deployment Link',
			type: 'url',
		},
		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{
				name: 'tag',
				title: 'Tag',
				type: 'object',
				fields: [
					{ name: 'name', title: 'Name', type: 'string' },
					{ name: 'color', title: 'Color', type: 'string' },
				]
			}]
		},
	]
}