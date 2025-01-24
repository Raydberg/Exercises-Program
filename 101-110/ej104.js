let fibonacci = function () {
    let n = 10;
    let f = 0;
    let f1 = -1;
    let f2 = 1;
    do {
        f = f1 + f2;
        f1 = f2;
        f2 = f;
        console.log(f)
    } while (f < n)
}
fibonacci()
fibonacci()
fibonacci()
fibonacci()
fibonacci()