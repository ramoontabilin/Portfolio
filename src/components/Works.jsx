import React, { useState, useEffect } from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { client, urlFor } from '../utils/client'
import { projectsQuery } from '../utils/query'
import { sourceLink } from '../utils/constants'

const ProjectCard = ({ index, title, description, tags, image, sourceLink, deploymentLink }) => {
	return (
		<motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450
				}}
				className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
			>
				<div className='relative w-full h-[230px] rounded-2xl overflow-hidden'>
					<img
						src={urlFor(image)}
						alt={title}
						className='w-full h-full object-cover'
					/>
					<div className='absolute inset-0 flex justify-end items-end gap-4 card-img_hover overflow-hidden'>
						<div
							onClick={() => { window.open(sourceLink, "_blank") }}
							className='bg-black-200 hover:bg-secondary w-12 h-12 m-3 rounded-full flex justify-center items-center cursor-pointer z-10 transition-all duration-200'
						>
							<img src={github} alt="github" />
						</div>
						<div
							onClick={() => { window.open(deploymentLink, "_blank") }}
							className='absolute flex justify-center items-center hover:opacity-100 opacity-0 bg-black-100/80 w-full h-full cursor-pointer transition-all duration-200'
						>
							<h4 className='text-white text-lg font-bold'>Check it out!</h4>
						</div>
					</div>
				</div>

				<div className='mt-5'>
					<h3 className='text-white font-bold text-2xl'>{title}</h3>
					<p className='mt-2 text-secondary text-sm'>{description}</p>
				</div>

				<div className='mt-4 flex flex-wrap gap-2'>
					{tags.map((tag) => (
						<p
							key={tag.name}
							className={`text-sm ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	)
}

const Works = () => {
	const [projects, setProjects] = useState([])
	useEffect(() => {
		client.fetch(projectsQuery())
			.then((data) => {
				setProjects(data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My work</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<div className='w-full flex flex-col'>
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className='mt-3 text-secondary text-lg max-w-3xl leading-8'
				>
					These are projects that I've worked on that utilize different technologies and concepts. Each project includes links to both its live version and source code.
				</motion.p>
				<motion.a
					href={sourceLink} target='_blank'
					rel='noreferrer'
					variants={fadeIn('', '', 0.1, 1)}
					className='mt-3 text-secondary hover:text-white text-lg max-w-3xl leading-8 transition-all duration-200'
				>
					Here's this site's source code.
				</motion.a>
			</div>

			<div className='mt-20 flex flex-wrap justify-center gap-7'>
				{projects.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						index={index}
						{...project}
					/>
				))}
			</div>
		</>
	)
}

export default SectionWrapper(Works, '')