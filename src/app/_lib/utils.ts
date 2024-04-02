
export function getRandomInt(count: number) {
	return Math.floor(Math.random() * count)
}

/// sleep promise
export function sleepAsync(millis: number /* int */ ) {
	return new Promise(resolve => setTimeout(resolve, millis | 0))
}
