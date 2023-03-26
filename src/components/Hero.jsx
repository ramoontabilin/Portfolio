import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import DavidCanvas from './canvas/David'
import { logoPurple } from '../assets'

const Hero = () => {
	return (
		<section className='relative w-full h-screen mx-auto'>
			<div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5 z-10`}>
				<div className='flex flex-col justify-center items-center mt-5'>
					<div className='w-5 h-5 rounded-full bg-[#915eff]' />
					<div className='w-1 sm:h-80 h-40 violet-gradient' />
				</div>
				<div className='drop-shadow'>
					<h1 className={`${styles.heroHeadText} text-white`}>I'm <span className='text-[#915eff]'>Ramon</span></h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>I like playing around with <br className='md:hidden block' /> various web designs and frameworks</p>
				</div>
			</div>
			<DavidCanvas />

			<div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
				<a href="#about">
					<div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'loop'
							}}
							className='w-3 h-3 rounded-full bg-secondary mb-1'
						/>
					</div>
				</a>
			</div>
			<div className='absolute flex w-full h-full overflow-hidden top-0 z-0'>
				<img
					src={logoPurple}
					alt="Ramon"
					className='-rotate-[15deg] w-[120vw]'
				/>
			</div>
		</section>
	)
}

export default Hero