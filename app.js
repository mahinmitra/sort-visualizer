var widthOfDiv = container.offsetWidth;
var TimeDelay = 100;
var light_blue = "#7fffd4";
var red = "#ff0000";
var dark_blue = "#0e0f73";
var green = "#2bc40c";
var yellow = "#d6ed07";
var orange = "#b86406";
var pink = "#b806b5";

function GenerateArrayElements() {
	var sizeofArray = parseInt(document.getElementById("InputBar").value);
	for (let i = 0; i < sizeofArray; i++) {
		const value = Math.floor(Math.random() * (151 - 51) + 5);
		const bar = document.createElement("div");
		bar.classList.add("bar");
		bar.style.transform = `translateX(${i * (widthOfDiv / sizeofArray)}px)`;
		bar.style.height = `${value * 5}px`;
		bar.style.width = `${widthOfDiv / sizeofArray}px`;
		bar.innerText = value;
		container.appendChild(bar);
	}
}

GenerateArrayElements();

function generate() {
	window.location.reload();
}

async function BubbleSort(delay = TimeDelay) {
	let bars = document.querySelectorAll(".bar");
	for (var i = 0; i < bars.length; i++) {
		for (var j = 0; j < bars.length - i - 1; j++) {
			var val1 = parseInt(bars[j].innerHTML);
			var val2 = parseInt(bars[j + 1].innerHTML);
			if (val1 > val2) {
				bars[j].style.backgroundColor = red;
				bars[j].style.color = red;
				bars[j + 1].style.color = dark_blue;
				bars[j + 1].style.backgroundColor = dark_blue;
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, TimeDelay)
				);
				var temp1 = bars[j + 1].style.height;
				var temp2 = bars[j + 1].innerText;
				bars[j + 1].style.height = bars[j].style.height;
				bars[j].style.height = temp1;
				bars[j + 1].innerText = bars[j].innerText;
				bars[j].innerText = temp2;
				bars[j + 1].style.backgroundColor = red;
				bars[j + 1].style.color = red;
				bars[j].style.color = dark_blue;
				bars[j].style.backgroundColor = dark_blue;
				await new Promise((resolve) =>
					setTimeout(() => {
						resolve();
					}, TimeDelay)
				);
				bars[j + 1].style.backgroundColor = light_blue;
				bars[j + 1].style.color = light_blue;
				bars[j].style.color = light_blue;
				bars[j].style.backgroundColor = light_blue;
			}
		}

		bars[j].style.backgroundColor = green;
		bars[j].style.color = green;
	}

	document.getElementById("Button1").disabled = false;
	document.getElementById("Button2").disabled = false;
	document.getElementById("Button3").disabled = false;
	document.getElementById("Button4").disabled = false;
}

async function SelectionSort(delay = TimeDelay) {
	let bars = document.querySelectorAll(".bar");
	var min_idx = 0;
	for (var i = 0; i < bars.length; i += 1) {
		min_idx = i;
		bars[i].style.backgroundColor = dark_blue;
		bars[i].style.color = dark_blue;
		for (var j = i + 1; j < bars.length; j += 1) {
			bars[j].style.backgroundColor = red;
			bars[j].style.color = red;
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, TimeDelay)
			);
			var val1 = parseInt(bars[j].innerHTML);
			var val2 = parseInt(bars[min_idx].innerHTML);
			if (val1 < val2) {
				if (min_idx !== i) {
					bars[min_idx].style.backgroundColor = light_blue;
					bars[min_idx].style.color = light_blue;
				}
				min_idx = j;
			} else {
				bars[j].style.backgroundColor = light_blue;
				bars[j].style.color = light_blue;
			}
		}

		var temp1 = bars[min_idx].style.height;
		var temp2 = bars[min_idx].innerText;
		bars[min_idx].style.height = bars[i].style.height;
		bars[i].style.height = temp1;
		bars[min_idx].innerText = bars[i].innerText;
		bars[i].innerText = temp2;
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, TimeDelay)
		);
		bars[min_idx].style.backgroundColor = light_blue;
		bars[min_idx].style.color = light_blue;
		bars[i].style.color = green;
		bars[i].style.backgroundColor = green;
	}

	document.getElementById("Button1").disabled = false;
	document.getElementById("Button2").disabled = false;
	document.getElementById("Button3").disabled = false;
	document.getElementById("Button4").disabled = false;
}

async function merge(arr, l, m, r, delay = TimeDelay) {
	var n1 = m - l + 1;
	var n2 = r - m;

	var L_val = new Array(n1);
	var L_height = new Array(n1);
	var R_val = new Array(n2);
	var R_height = new Array(n2);

	// Copy data to temp arrays L[] and R[]
	for (var i = 0; i < n1; i++) {
		L_val[i] = parseInt(arr[l + i].innerHTML);
		L_height[i] = arr[l + i].style.height;
	}
	for (var j = 0; j < n2; j++) {
		R_val[j] = parseInt(arr[m + 1 + j].innerHTML);
		R_height[j] = arr[m + 1 + j].style.height;
	}
	var i = 0;
	var j = 0;
	var k = l;

	while (i < n1 && j < n2) {
		if (L_val[i] <= R_val[j]) {
			arr[k].style.color = dark_blue;
			arr[k].style.backgroundColor = dark_blue;
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, TimeDelay)
			);
			arr[k].innerHTML = L_val[i];
			arr[k].style.height = L_height[i];

			i++;
		} else {
			arr[k].style.color = orange;
			arr[k].style.backgroundColor = orange;
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, TimeDelay)
			);
			arr[k].innerHTML = R_val[j];
			arr[k].style.height = R_height[j];
			j++;
		}
		k++;
	}

	while (i < n1) {
		arr[k].style.color = red;
		arr[k].style.backgroundColor = red;
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, TimeDelay)
		);
		arr[k].innerHTML = L_val[i];
		arr[k].style.height = L_height[i];
		i++;
		k++;
	}

	while (j < n2) {
		arr[k].style.color = green;
		arr[k].style.backgroundColor = green;
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, TimeDelay)
		);
		arr[k].innerHTML = R_val[j];
		arr[k].style.height = R_height[j];
		j++;
		k++;
	}
}

async function mergeSort(arr, l, r, delay = TimeDelay) {
	if (l >= r) {
		return;
	}
	var m = l + parseInt((r - l) / 2);
	await mergeSort(arr, l, m);
	await mergeSort(arr, m + 1, r);
	await merge(arr, l, m, r);
}

async function CallMergeSort(delay = TimeDelay) {
	let bars = document.querySelectorAll(".bar");
	await mergeSort(bars, 0, bars.length - 1);
}

async function partition(arr, low, high, delay = TimeDelay) {
	let pivot = parseInt(arr[high].innerHTML);
	let i = low - 1;
	arr[high].style.backgroundColor = red;
	arr[high].style.color = red;

	for (let j = low; j <= high - 1; j++) {
		arr[j].style.color = yellow;
		arr[j].style.backgroundColor = yellow;

		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, TimeDelay)
		);
		if (parseInt(arr[j].innerHTML) < pivot) {
			i++;
			var temp_height = arr[i].style.height;
			arr[i].style.height = arr[j].style.height;
			arr[j].style.height = temp_height;

			var temp_val = arr[i].innerHTML;
			arr[i].innerHTML = arr[j].innerHTML;
			arr[j].innerHTML = temp_val;

			arr[i].style.color = orange;
			arr[i].style.backgroundColor = orange;

			if (i != j) {
				arr[j].style.color = pink;
				arr[j].style.backgroundColor = pink;
			}
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, TimeDelay)
			);
		} else {
			arr[j].style.color = pink;
			arr[j].style.backgroundColor = pink;
		}
	}

	var temp_height = arr[i + 1].style.height;
	arr[i + 1].style.height = arr[high].style.height;
	arr[high].style.height = temp_height;

	var temp_val = arr[i + 1].innerHTML;
	arr[i + 1].innerHTML = arr[high].innerHTML;
	arr[high].innerHTML = temp_val;

	arr[high].style.color = pink;
	arr[high].style.backgroundColor = pink;

	arr[i + 1].style.color = green;
	arr[i + 1].style.backgroundColor = green;

	await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, TimeDelay)
	);
	for (var k = 0; k < arr.length; k++) {
		arr[k].style.backgroundColor = green;
		arr[k].style.color = green;
	}
	return i + 1;
}

async function quickSort(arr, low, high, delay = TimeDelay) {
	if (low < high) {
		let pi = await partition(arr, low, high);
		await quickSort(arr, low, pi - 1);
		await quickSort(arr, pi + 1, high);
	}
}

async function CallQuickSort(delay = TimeDelay) {
	let bars = document.querySelectorAll(".bar");
	await quickSort(bars, 0, bars.length - 1);
}

async function insertionSort() {
	let arr = document.querySelectorAll(".bar");
	let i, key_val, key_height, j;
	for (i = 1; i < arr.length; i++) {
		key_val = parseInt(arr[i].innerHTML);
		key_height = arr[i].style.height;
		j = i - 1;

		while (j >= 0 && parseInt(arr[j].innerHTML) > key_val) {
			arr[j + 1].innerHTML = arr[j].innerHTML;
			arr[j + 1].style.height = arr[j].style.height;

			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, TimeDelay)
			);
			j = j - 1;
		}
		arr[j + 1].innerHTML = key_val;
		arr[j + 1].style.height = key_height;
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, TimeDelay)
		);
	}
}

async function heapsort(arr) {
	var N = arr.length;
	for (var i = Math.floor(N / 2) - 1; i >= 0; i--) {
		await heapify(arr, N, i);
	}
	for (var i = N - 1; i > 0; i--) {
		var temp_val = arr[0].innerHTML;
		arr[0].innerHTML = arr[i].innerHTML;
		arr[i].innerHTML = temp_val;

		var temp_height = arr[0].style.height;
		arr[0].style.height = arr[i].style.height;
		arr[i].style.height = temp_height;
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, TimeDelay)
		);

		await heapify(arr, i, 0);
	}
}

async function heapify(arr, N, i) {
	var largest = i;
	var l = 2 * i + 1;
	var r = 2 * i + 2;

	if (l < N && parseInt(arr[l].innerHTML) > parseInt(arr[largest].innerHTML)) {
		largest = l;
	}

	if (r < N && parseInt(arr[r].innerHTML) > parseInt(arr[largest].innerHTML)) {
		largest = r;
	}

	if (largest != i) {
		var swap_val = arr[i].innerHTML;
		arr[i].innerHTML = arr[largest].innerHTML;
		arr[largest].innerHTML = swap_val;

		var swap_height = arr[i].style.height;
		arr[i].style.height = arr[largest].style.height;
		arr[largest].style.height = swap_height;
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, TimeDelay)
		);
		await heapify(arr, N, largest);
	}
}

async function CallHeapSort(delay = TimeDelay) {
	let bars = document.querySelectorAll(".bar");
	await heapsort(bars);
}
