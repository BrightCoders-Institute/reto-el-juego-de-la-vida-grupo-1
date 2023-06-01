// let grid = [ [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
// [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
// [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
// [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
// [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
// [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
// [ 0, 0, 1, 1, 0, 0, 0, 0, 0, 0 ],
// [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0 ],
// [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
// [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
// ];


let rows = 10;
let columns = 10;
let grid=creategrid();
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
	console.log("Generation:");
	for (let row = 0; row < rows; row++) {
		let rowString = "";
		for (let col = 0; col < columns; col++) {
			rowString += grid[row][col] === 1 ? " X " : " - ";
		}
		console.log(rowString);
	}
	console.log("-------------------");
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
				//   console.log(count);
			}
		}
	}
	return count;
}

function simulate() {
	// Print the initial grid
	printGrid();

	// Simulate each generation
	for (let generation = 1; generation <= 5; generation++) {
		updateGrid();
		printGrid();
	}
}

function updateGrid() {

	const newGrid = creategrid()

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < columns; col++) {
			const cell = grid[row][col];
			const liveNeighbors = countLiveNeighbors(row, col);
			// console.log(liveNeighbors);

			if (cell === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
				newGrid[row][col] = 0; // Cell dies due to underpopulation or overpopulation
			} else if (cell === 0 && liveNeighbors === 3) {
				newGrid[row][col] = 1; // Cell becomes alive due to reproduction
			} else {
				newGrid[row][col] = cell; // Cell remains unchanged
			}
		}
	}

	grid = newGrid;
	// console.log(grid);
}


simulate()
