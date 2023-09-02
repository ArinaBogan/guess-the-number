class Guess {
    searchNumber(num) {
        try {
            let start = 0;
            let end = 100;
            let count = 0;

            for (let i = start; i < end; i++) {
                let value = +prompt(`Программа загадала число.Ваша задача угадать его.Введите чило от ${start} до ${end}`);
                count++
                if (!isNaN(value) && value < 101 && value > 0) {
                    if (num == value) {
                        alert(`Вы угадали число с ${count} попытки,поздравляем!`);
                        break;
                    } else if (num > value) {
                        start = value;
                        alert('Слишком мало, попробуйте еще раз');
                    } else if (num < value) {
                        end = value;
                        alert('Слишком много, попробуйте еще раз');
                    }
                } else {
                    alert('Неверное значение.Введите число!');
                }
            }
        } catch (error) {
            return (error.message)
        }
    }
}
const num = Math.round(Math.random() * 100);

const guess = new Guess();
guess.searchNumber(num)