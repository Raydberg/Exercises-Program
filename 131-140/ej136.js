
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
let concatenatedString = "";

mutantes.forEach(mutante => {
    if (mutante === "Jean Elaine Grey" || mutante === "James \"Logan\" Howlett") {
        if (concatenatedString) {
            concatenatedString += " / ";
        }
        concatenatedString += mutante;
    }
});

console.log(concatenatedString);