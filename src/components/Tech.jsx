import React, { useState, useEffect } from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
// import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { client, urlFor } from '../utils/client'
import { technologiesQuery } from '../utils/query'

const TechCard = ({ index, name, icon }) => {
	return (
		<Tilt
			className='xs:w-[140px] w-full'
			tiltReverse={true}
			gyroscope={true}
		>
			<motion.div
				// variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
				initial={{ opacity: 0 }}
				animate={{ opacity: [0, 1] }}
				transition={{
					duration: 0.75,
					delay: index * 0.5,
					ease: [0, 0.71, 0.2, 1.01]
				}}
				className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450
					}}
					className='bg-tertiary rounded-[20px] p-4 min-h-[140px] flex justify-evenly items-center flex-col'
				>
					<img src={urlFor(icon)} alt={name} className='w-16 h-16 object-contain' />
					{/* <h3 className='text-white text-xl font-bold text-center'>{title}</h3> */}
				</div>
			</motion.div>
		</Tilt>
	)
}

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
			{technologies.map((tech, index) => (
				<div className='w-28 h-28' key={tech.name}>
					<TechCard index={index} icon={tech.icon} name={tech.name} />
					{/* <BallCanvas icon={urlFor(tech.icon)} /> */}
				</div>
			))}
		</div>
	)
}

export default SectionWrapper(Tech, '')