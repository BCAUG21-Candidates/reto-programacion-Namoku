const Digito = class {
	#digito = [];
	#lcd = [];
	#states = {
		0: "   ",
		1: " _ ",
		2: "|  ",
		3: "|_ ",
		4: "  |",
		5: " _|",
		6: "| |",
		7: "|_|"
	}

	#numbers = {
		0: this.#statesToArray(1, 6, 7),
		1: this.#statesToArray(0, 4, 4),
		2: this.#statesToArray(1, 5, 3),
		3: this.#statesToArray(1, 5, 5),
		4: this.#statesToArray(0, 7, 4),
		5: this.#statesToArray(1, 3, 5),
		6: this.#statesToArray(1, 3, 7),
		7: this.#statesToArray(1, 4, 4),
		8: this.#statesToArray(1, 7, 7),
		9: this.#statesToArray(1, 7, 5)
	}

	#obtenerDigito () {
		for (let i in this.#digito) 
			this.#lcd.push(this.#numbers[this.#digito[i]]);
	}

	#statesToArray (a, b, c) {
		return [this.#states[a], this.#states[b], this.#states[c]];
	}

	constructor (digito) {
		[...digito].forEach(c => this.#digito.push(c))
		this.#obtenerDigito();
	}

	getLcd () {
		return this.#lcd;
	}
	
	printLcd () {
		let rows = [];
		for (let i = 0; i < 3; i++) {
			for (let a in this.#lcd)
				rows.push(this.#lcd[a][i])
			console.log(...rows);
			rows = [];
		}
	}
}
digito = new Digito(process.argv[2].toString());
digito.printLcd();
