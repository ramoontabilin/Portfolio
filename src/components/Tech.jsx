import React, { useState, useEffect } from 'react'

import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { client, urlFor } from '../utils/client'
import { technologiesQuery } from '../utils/query'

const Tech = () => {
	const [technologies, setTechnologies] = useState([])
	useEffect(() => {
		client.fetch(technologiesQuery())
			.then((data) => {
				setTechnologies(data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	return (
		<div className='flex flex-row flex-wrap justify-center gap-10'>
			{technologies.map((tech) => (
				<div className='w-28 h-28' key={tech.name}>
					<BallCanvas icon={urlFor(tech.icon)} />
				</div>
			))}
		</div>
	)
}

export default SectionWrapper(Tech, '')