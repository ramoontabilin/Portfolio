import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const DavidCanvas = () => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 768px)')
		setIsMobile(mediaQuery.matches)

		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches)
		}

		mediaQuery.addEventListener("change", handleMediaQueryChange)

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange)
		}
	}, [])


	return (
		<Canvas
			frameloop='demand'
			shadows
			camera={{ position: [50, 3, 20], angle: [-5, 0, 0], fov: 45 }}
			gl={{ preserveDrawingBuffer: true }}
			className='z-10'
		>
			<hemisphereLight intensity={0.15} groundColor='purple' />
			<pointLight
				color={'hotpink'}
				position={[-5, 0, -20]}
				intensity={1}
			/>
			<spotLight
				color={'purple'}
				position={[30, 0, 20]}
				angle={1.12}
				penumbra={2}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					autoRotateSpeed={-2}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<David isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	)
}

const David = ({ isMobile }) => {
	const { nodes, materials } = useGLTF("./david/david.glb")
	return (
		<group dispose={null}>
			<group
				position={isMobile ? [16, -12, -16] : [12, -15, -10]}
				rotation={[3.63, -2.98, 0.01]}
				scale={isMobile ? 0.18 : 0.13}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_2.geometry}
					material={materials.material_0}
				/>
			</group>
		</group>
	)
}

useGLTF.preload("./david/david.glb");

export default DavidCanvas