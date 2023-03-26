import React, { useState, useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { client, urlFor } from '../utils/client'
import { experiencesQuery } from '../utils/query'

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: '#1d1836', color: '#fff' }}
			contentArrowStyle={{ borderRight: '7px #232631' }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className='flex justify-center items-center w-full h-full'>
					<img src={urlFor(experience.icon)} alt={experience.company} className='w-[60%] h-[60%] object-contain' />
				</div>
			}
		>
			<div>
				<h3 className='text-white text-2xl font-bold'>{experience.title}</h3>
				<p className='text-secondary text-base font-semibold' style={{ margin: 0 }}>{experience.company}</p>
			</div>
			<ul className='mt-5 list-disc ml-5 space-y-2'>
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className='text-white-100 text-sm pl-1 tracking-wider'
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	)
}

const Experience = () => {
	const [experiences, setExperiences] = useState([])
	useEffect(() => {
		client.fetch(experiencesQuery())
			.then((data) => {
				setExperiences(data)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What I have done so far</p>
				<h2 className={styles.sectionHeadText}>Work Experience.</h2>
			</motion.div>
			<div className='mt-20 flex flex-col'>
				<VerticalTimeline>
					{experiences.map((experience) => (
						<ExperienceCard
							key={experience._id}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	)
}

export default SectionWrapper(Experience, 'work')