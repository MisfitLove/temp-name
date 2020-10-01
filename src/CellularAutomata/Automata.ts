export class Automata {
    cells: boolean[][][];  //temporary, number for debugging, should be boolean or class of its own
    size: {
        x: number,
        y: number,
        z: number
    };

    constructor(x: number, y: number, z: number) {
        this.size = { x, y, z };
        //initialize cells, move the logic outside or add extension to type if possible
        this.cells = [];
        for (let i: number = 0; i < this.size.x; i++) {
            this.cells[i] = [];
            for (let j: number = 0; j < this.size.y; j++) {
                this.cells[i][j] = [];
            }
        }
    }

    randomize(): Automata {
        for (let i: number = 0; i < this.size.x; i++) {
            for (let j: number = 0; j < this.size.y; j++) {
                for (let z: number = 0; z < this.size.z; z++) {
                    this.cells[i][j][z] = Math.random() < 0.5;
                }
            }
        }

        return this;
    }

    static Random(x: number, y: number, z: number): Automata {
        return new Automata(x, y, z).randomize();
    }
}