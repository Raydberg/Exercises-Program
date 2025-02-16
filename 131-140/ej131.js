const alumnas = ["Maria", "Marcela", "Yolanda", "Lourdes", "Belen"];
const alumnos = ["Juan", "Pedro", "Pablo", "Lautaro", "Diego"];

const alumnosYAlumnas = [...alumnas, ...alumnos];

alumnas.forEach((alumna, index) => {
    console.log(`${alumna} - index ${index + 1}`)
})
console.log("---------------------------------")
let index = 0;
while (index < alumnos.length) {
    console.log(alumnos[index])
    index++;
}
console.log("--------------------------")

for (let i = 0; i < alumnosYAlumnas.length; i++) {
    console.log(alumnosYAlumnas[i])
}