import parseThread from './parseThread'

/**
 * Parses chan API response for threads list.
 * @param  {object} response — Chan API response for threads list
 * @param  {object} options
 * @return {object}
 * @example
 * // Returns:
 * // [{
 * //   id: 12345,
 * //   ... See `parseThread.js`,
 * //   comments: [{
 * //     ... See `parseComment.js`
 * //   }]
 * // }, ...]
 * parseThreads(response)
 */
export default function parseThreads(response, {
	filters,
	messages,
	parseCommentTextPlugins
}) {
	return response.threads.map((thread) => parseThread(thread, {
		defaultAuthor: response.default_name,
		filters,
		parseCommentTextPlugins,
		messages
	}))
}