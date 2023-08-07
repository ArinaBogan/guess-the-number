const num = Math.round(Math.random() * 100);

function searchNumber(n) {
    let start = 0;
    let end = 100;
    let count = 0;

    for (let i = start; i < end; i++) {
        let value = +prompt(`Программа загадала число.Ваша задача угадать его.Введите чило от ${start} до ${end}`);
        count++
        if (!isNaN(value) && value < 101 && value > 0) {
            if (n == value) {
                alert(`Вы угадали число с ${count} попытки,поздравляем!`);
                break;
            } else if (n > value) {
                start = value;
                alert('Слишком мало, попробуйте еще раз');
            } else if (n < value) {
                end = value;
                alert('Слишком много, попробуйте еще раз');
            }
        } else {
            alert('Неверное значение.Введите число!');
        }

    }
}
let result = searchNumber(num);
console.log(result);
