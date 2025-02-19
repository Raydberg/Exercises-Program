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

const mutantesFiltrados = mutantes.filter(mutante => mutante !== "Scott Summers");

console.log(`Mutante en índice 1 en la lista original: ${mutantes[1]}`);
console.log(`Mutante en índice 1 en la lista filtrada: ${mutantesFiltrados[1]}`);