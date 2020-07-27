export const capitalize = s => {
	if (typeof s !== `string`) return ``
	s = s
		.toLowerCase()
		.split(` `)
		.map(item => {
			return item.replace(/^./, l => l.toUpperCase())
		})
	return s.join(` `)
}

export const sortBy = ({ array, key }) => {
	return array.sort((x, y) => {
		let a = x[key].toUpperCase(),
			b = y[key].toUpperCase()
		return a === b ? 0 : a > b ? 1 : -1
	})
}

export const goBack = () => {
	window.history.back()
}
