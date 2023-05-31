const grid = [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
[ 0, 0, 1, 1, 0, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
];

let rows = 10;
let columns = 10;
function printGrid() {
	console.log("Generation:");
	for (let row = 0; row < rows; row++) {
		let rowString = "";
		for (let col = 0; col < columns; col++) {
			rowString += grid[row][col] === 1 ? "*" : ".";
		}
			console.log(rowString);
	}
	console.log("-------------------");
}

printGrid()