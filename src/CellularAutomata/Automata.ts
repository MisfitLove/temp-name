class Automata {
    cell: boolean[][][];
    size: {
        x: number,
        y: number,
        z: number
    };
    
    constructor(x: number, y: number, z: number) {
        this.size = {x,y,z};

        // //initialize cells
        // this.cell = [];
        // for (let i: number = 0; i < 18; i++) {
        //     this.cell = [];
        //     for (let j: number = 0; j < 18; j++) {
        //         this.cell[i][j] = [];
        //     }
        // }
            
    }

    randomize() {
        for (let i: number = 0; i < this.size.x; i++) {
            for (let j: number = 0; j < this.size.y; j++) {
                for (let z: number = 0; z < this.size.z; z++){
                    this.cell[i][j][z] = (Math.random() > 0.5) ? true : false;
                }
            }
        }
    }

    static random(x: number, y: number, z: number): Automata {
        let automata = new Automata(x, y, z);

        for (let i: number = 0; i < automata.size.x; i++) {
            for (let j: number = 0; j < automata.size.y; j++) {
                for (let z: number = 0; z < automata.size.z; z++){
                    automata.cell[i][j][z] = (Math.random() > 0.5) ? true : false;
                }
            }
        }

        return automata;
    }

    print() {
        console.log("xD");
    }
}

let dupa = new Automata(3, 3, 3);