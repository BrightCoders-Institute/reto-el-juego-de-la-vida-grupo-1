let rows = 10;
let columns = 10;
let sum;
let lastSum = 0
let isAlive = true;

let grid = creategrid();
setinitialgrid();

function creategrid() {
const grid=[];
	for (let i = 0; i < rows; i++) {
		grid[i] = new Array(columns);
	}
return grid;
}

function setinitialgrid() {

	for (let i = 0; i < columns; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j] = Math.round(Math.random(2));
		}
	}

}

function printGrid() {
	console.log("--------------------");
	console.log(" THE--GAME--OF--LIFE");
	console.log("--------------------");
	for (let row = 0; row < rows; row++) {
		let rowString = "";
		for (let col = 0; col < columns; col++) {
			rowString += grid[row][col] === 1 ? '😀' : '💀';
		}
		console.log(rowString);
	}
	console.log("--------------------");
}

function countLiveNeighbors(row, col) {
	let count = 0;

	for (let i = -1; i <= 1; i++) {
		for (let j = -1; j <= 1; j++) {

			if (i === 0 && j === 0) continue;

			const neighborRow = row + i;
			const neighborCol = col + j;

			if (
				neighborRow >= 0 &&
				neighborRow < rows &&
				neighborCol >= 0 &&
				neighborCol < columns &&
				grid[neighborRow][neighborCol] === 1
			) {
				count++;
			}
		}
	}
	return count;
}


function borrarConsola() {
	process.stdout.write('\x1Bc'); // Clean console
}

function simulate() {
	// Print the initial grid
	printGrid();

	//Simulate each generation
	let count = 0;
	while (isAlive) {
		setTimeout(() => {
			borrarConsola(); // Clean console before updating grid
			updateGrid();
			printGrid();
		}, 650 * count);
		// Stop iteration
		count += 1;
		if(count > 50 ) {
			console.log("llego a los 50 ")
			break;
		}
	};
}

function updateGrid() {
	const newGrid = creategrid();

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < columns; col++) {
			const cell = grid[row][col];
			const liveNeighbors = countLiveNeighbors(row, col);

			if (cell === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
				newGrid[row][col] = 0; // Cell dies due to underpopulation or overpopulation
			} else if (cell === 0 && liveNeighbors === 3) {
				newGrid[row][col] = 1; // Cell becomes alive due to reproduction
			} else {
				newGrid[row][col] = cell; // Cell remains unchanged
			}
		}
	}

	if(grid === newGrid) {
		isAlive = false;
	}

	// Compare two 2d arrays
	const a1 = [].concat(...grid);
	const a2 = [].concat(...newGrid);

	function areEqual (array1, array2) {
		return array1.every((element, index) => {
			if (element === array2[index]) {
				return true;
			}
			return false;
		});
	}

	if (areEqual(a1, a2)) {
		isAlive = false;
	}

	grid = newGrid;

	let sum = grid
		.map((fila) => fila.reduce((acumulador, valor) => acumulador + valor, 0))
		.reduce((acumulador, valor) => acumulador + valor, 0);

	if (sum === 0) {
		console.log("-EXTINCTION-");
		isAlive = false;
	}

	lastSum = sum;

}

simulate();
