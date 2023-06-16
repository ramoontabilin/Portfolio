import React, { useState, useEffect } from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { client, urlFor } from '../utils/client'
import { servicesQuery } from '../utils/query'

const ServiceCard = ({ index, title, image }) => {
	return (
		<Tilt
			className='xs:w-[250px] w-full'
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
					className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
				>
					<img src={urlFor(image)} alt={title} className='w-16 h-16 object-contain' />
					<h3 className='text-white text-xl font-bold text-center'>{title}</h3>
				</div>
			</motion.div>
		</Tilt>
	)
}

const About = () => {
	const [services, setServices] = useState([])
	useEffect(() => {
		client.fetch(servicesQuery())
			.then((data) => {
				setServices(data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>
			<motion.p
				variants={fadeIn('', '', 0, 1, 1)}
				className='mt-4 text-secondary text-lg max-w-3xl leading-8'
			>
				I'm a web developer who's always ready to learn and try new things. I can quickly pick up new skills and use them to make cool stuff. I'm always eager to work on innovative projects that involve cutting-edge technology.
			</motion.p>
			<div className='mt-20 flex flex-wrap justify-center gap-10'>
				{services.map((service, index) => (
					<ServiceCard
						key={service._id}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	)
}

export default SectionWrapper(About, 'about')