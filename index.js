const Digito = class {
	#digito = [];
	#lcd = [];
	#size = []
	#states = {
		0: [0, 1], // ' ', '-'
		1: [0, 1, 2, 3] // '   ', '|  ', '  |', '| |'
	}

	#numbers = {
		0: this.#statesToArray(1, 3, 0, 3, 1),
		1: this.#statesToArray(0, 2, 0, 2, 0),
		2: this.#statesToArray(1, 2, 1, 1, 1),
		3: this.#statesToArray(1, 2, 1, 2, 1),
		4: this.#statesToArray(0, 3, 1, 2, 0),
		5: this.#statesToArray(1, 1, 1, 2, 1),
		6: this.#statesToArray(1, 1, 1, 3, 1),
		7: this.#statesToArray(1, 2, 0, 2, 0),
		8: this.#statesToArray(1, 3, 1, 3, 1),
		9: this.#statesToArray(1, 3, 1, 2, 0)
	}

	constructor (digito, size) {
		size ? this.#size = size : this.#size = [1, 1];
		[...digito].forEach(c => this.#digito.push(c))
		this.#obtenerDigito(this.#size);
	}

	#obtenerDigito (size) {
		console.log(size)
		for (let i in this.#digito) {
			this.#lcd[i] = [];
			for (let j in this.#numbers[this.#digito[i]]) {
				switch (j) {
					case '0':
						this.#lcd[i][0] = this.#printWidth(size[0], this.#numbers[this.#digito[i]][j]);
						break;
					case '1':
						this.#lcd[i][1] = this.#printHeight(size[0], size[1], this.#numbers[this.#digito[i]][j])
						break;
					case '2':
						this.#lcd[i][2] = this.#printWidth(size[0], this.#numbers[this.#digito[i]][j]);
						break;
					case '3':
						this.#lcd[i][3] = this.#printHeight(size[0], size[1], this.#numbers[this.#digito[i]][j])
						break;
					case '4':
						this.#lcd[i][4] = this.#printWidth(size[0], this.#numbers[this.#digito[i]][j]);
						break;
				}
			}
		}
	}

	#printWidth (x, state) {
		let aux = []
		for (let i = 0; i < (x+2); i++) {
			if ( i == 0 || i == (x+1) )
				aux.push(" ");
			else
				state ? aux.push("-") : aux.push(" ");
		}
		return aux;
	}
	
	#printHeight (x, y, state) {
		let aux = []
		for (let i = 0; i < y; i++) {
			aux[i] = []
			for (let j = 0; j < (x+2); j ++) {
				switch (state) {
					case 1:
						(j == 0) ? aux[i].push() = "|" : aux[i][j] = " ";
						break;
					case 2:
						(j == (x+1)) ? aux[i][j] = "|" : aux[i][j] = " ";
						break;
					case 3:
						(j == 0 || j == (x+1)) ? aux[i][j] = "|" : aux[i][j] = " ";
						break;
				}
			}
		}
		return aux;
	}

	#statesToArray (a, b, c, d, e) {
		return [this.#states[0][a], this.#states[1][b], this.#states[0][c], this.#states[1][d], this.#states[0][e]];
	}

	getLcd () {
		return this.#lcd;
	}
	
	printLcd () {
		let rows = [];
		let aux = []
		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < this.#lcd.length; j++){
				switch (i) {
					case 0:
					case 2:
					case 4:
						rows.push(...this.#lcd[j][i])
						break;
					case 1:
					case 3:
						for (let k in this.#lcd[j][i]) {
						aux.push(...this.#lcd[j][i][k])
						}
						break;
				}
			}
			console.log(...rows);
			rows = []
		}
		// for (let i = 0; i < 3; i++) {
		// 	for (let a in this.#lcd)
		// 		rows.push(this.#lcd[a][i])
		// 	console.log(...rows);
		// 	rows = [];
		// }
	}
}
let digito = new Digito(process.argv[2].toString(), [parseInt(process.argv[3]),parseInt(process.argv[4])]);
digito.printLcd();
// console.log(digito.getLcd()[0][1][1])
