import { Automata } from "./CellularAutomata/Automata.js";

async function xD() {
    var automata = Automata.Random(2, 2, 1);


    while(true){
        console.table(automata.cells);
        automata.randomize();
        await new Promise( resolve => setTimeout(resolve, 100) )
    }
}

xD();

// var automata = Automata.Random(2, 2, 2);
// console.table(automata.cells);
