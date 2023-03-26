export default {
	name: 'services',
	title: 'Services',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hostspot: false
			}
		},
	]
}