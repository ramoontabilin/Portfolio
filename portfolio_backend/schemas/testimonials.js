export default {
	name: 'testimonials',
	title: 'Testimonials',
	type: 'document',
	fields: [
		{
			name: 'testimonial',
			title: 'Testimonial',
			type: 'string',
		},
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'role',
			title: 'Role',
			type: 'string',
		},
		{
			name: 'company',
			title: 'Company',
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
	]
}