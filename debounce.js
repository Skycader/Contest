const fetchUrl = (url) => {
	console.log(`fetching ${url}...`);
}

function debounce(callback, delay) {
	let lastCall = 0
	function wrapper() {
		if (Date.now() - lastCall > delay) {
		callback(...arguments)
			lastCall = Date.now()
		}
	}

	return wrapper

}

const fetching = debounce(fetchUrl,300)

//const fetchUrl = null

fetching(1)
fetching(2)
fetching(3)

setTimeout(()=>{fetching(4)},300)
