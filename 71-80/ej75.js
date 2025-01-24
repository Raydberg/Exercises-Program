let n = 10
let f = 0;
let f1 = -1;
let f2 = 1;
while (f < n) {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f)
}