export default {
	name: 'experiences',
	title: 'Experiences',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'company',
			title: 'Company',
			type: 'string',
		},
		{
			name: 'icon',
			title: 'Icon',
			type: 'image',
			options: {
				hostspot: false
			}
		},
		{
			name: 'iconBg',
			title: 'Icon BG',
			type: 'string',
		},
		{
			name: 'date',
			title: 'Date',
			type: 'string',
		},
		{
			name: 'points',
			title: 'Points',
			type: 'array',
			of: [{
				name: 'point',
				type: 'string',
			}]
		},
	]
}