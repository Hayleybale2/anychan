import type { Content, ImageboardDataSourceDefinition } from '@/types'

const imageboard: ImageboardDataSourceDefinition = {
	id: "crbachan",
	shortId: "🦄",
	title: "CRBAchan",
	description: "An imageboard for Canterlot Royal Ballet Academy"
	links: [{
		type: "rules",
		text: "Rules",
		url: "https://ib.crba.dedyn.io/rules"
	}],
	description: config.description as Content
}

export default imageboard
