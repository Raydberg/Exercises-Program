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
const mutantesString = mutantes.reduce((acc, mutante, index) => {
    return acc + mutante + (index < mutantes.length - 1 ? ', ' : '');
}, '');

console.log(mutantesString);