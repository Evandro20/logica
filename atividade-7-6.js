var user = require('readline-sync')
num = []
n = 1
for (x = 1; x <= 10; x++, n++) {
    num.push(user.questionInt('Insira 10 numeros. O ' + n + ' numero: '))
}
function bubblesort(num) {
    let swap;
    let last = num.length - 1
    do {
        swap = false;
        for (let i = 0; i < last; i++) {
            if (num[i] > num[num + 1]) {
                [num[i], num[i + 1]] = [num[i + 1], num[i]];
                swap = true
            }
        }
        last--
    } while (swap)
    returns = num
}
console.log(num)