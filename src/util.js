export const parseQueryString = str => {
	str = decodeURIComponent(str.replace(/^\?/, ""));
	let obj = {};
	if (str.indexOf("=") !== -1) {
		str.split("&").forEach(query => {
			// if (isNaN(query.split("=")[1])) {
			// 	obj[query.split("=")[0]] = query.split("=")[1];
			// } else {
			// 	obj[query.split("=")[0]] = Number(query.split("=")[1]);
			// }
			obj[query.split("=")[0]] = query.split("=")[1];
		});
	} else {
		return {};
	}
	return obj;
};


export const toQueryString = obj => {
	let arr = [];
	for (let key in obj) {
		// arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
		arr.push(key + "=" + obj[key]);
	}
	return arr.join("&");
	// return decodeURIComponent(arr.join("&"));
};

export const debounce = (fn, delay, immediate) => {
	let timer;
	return function(...args) {
		let callNow = immediate && !timer;
		clearTimeout(timer);
		timer = setTimeout(() => {
			timer = null;
			!immediate && fn.call(this, ...args);
		}, delay);
		callNow && fn.call(this, ...args);
	};
};