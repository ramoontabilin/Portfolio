export const experiencesQuery = () => {
	const query = '*[_type == "experiences"] | order(_updatedAt asc)'
	return query
}

export const projectsQuery = () => {
	const query = '*[_type == "projects"] | order(_updatedAt desc)'
	return query
}

export const servicesQuery = () => {
	const query = '*[_type == "services"] | order(_updatedAt desc)'
	return query
}

export const technologiesQuery = () => {
	const query = '*[_type == "technologies"] | order(_updatedAt desc)'
	return query
}

export const testimonialsQuery = () => {
	const query = '*[_type == "testimonials"] | order(_updatedAt desc)'
	return query
}