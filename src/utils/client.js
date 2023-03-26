import { createClient } from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
	projectId: 'm22ifkxx',
	dataset: 'production',
	apiVersion: '2023-03-26',
	useCdn: true,
	token: import.meta.env.VITE_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)