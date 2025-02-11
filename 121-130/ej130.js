
const mutantes = [
    "Prof. Charles Francis Xavier",
    "Scott Summers",
    "Dr. Henry Philip \"Hank\" McCoy",
    "Jean Elaine Grey",
    "Calvin Montgomery Rankin",
    "Kevin Sydney",
    "Lorna Sally Dane",
    "Alexander Summers",
    "Suzanne Chan",
    "James \"Logan\" Howlett",
    "Ororo Monroe"
];

console.log("Lista original de mutantes:");
console.log(mutantes);

const mutantesOrdenados = Array.from(mutantes).sort();
console.log("Lista ordenada de mutantes:");
console.log(mutantesOrdenados);

const mutantesRevertidos = Array.from(mutantesOrdenados).reverse();
console.log("Lista revertida de mutantes:");
console.log(mutantesRevertidos);

const mutantesUnidos = mutantesRevertidos.join(" * ");
console.log("Nombres de mutantes separados por *:");
console.log(mutantesUnidos);