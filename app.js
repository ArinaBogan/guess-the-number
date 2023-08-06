const num = Math.round(Math.random() * 100);


function searchNumber(n) {

    let start = 0;
    let end = 100;
    let count = 0;

    for (let i = start; i < end; i++) {
        let value = prompt('Программа загадала число.Ваша задача угадать его.Введите чило от 0 до 100');
        count++
        if (n == value) {
            console.log('Вы угадали число,поздравляем!');
            break;
        } else if (n > value) {
            start = value;
            alert('Слишком много, попробуйте еще раз');
        } else if (n < value) {
            end = value;
            alert('Слишком мало, попробуйте еще раз');
        }
    }
}
let result = searchNumber(num);
console.log(result);
