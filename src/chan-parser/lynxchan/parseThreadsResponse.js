import parseThread from './parseThread'

/**
 * Parses chan API response for threads list.
 * @param  {object} response — Chan API response for threads list.
 * @param  {object} options
 * @return {object[]} See README.md for "Thread" object description.
 */
export default function parseThreads(response, options) {
	return response.map((thread) => parseThread(thread, {
		...options,
		isPreview: true
	}))
}