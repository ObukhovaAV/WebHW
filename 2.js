// const yourName = prompt('Введите имя');
// greeting(yourName);

// function greeting(name) {
//     console.log(`Привет, ${name}!`);
// }


const userData = prompt("Введите имя");
greeting(userData);
const age = Number.parseInt(prompt('Сколько Вам лет?'));
if (age > 0 && age < 60 ) {
    alert(`${userData}, Вы так молоды!`);
} else {
    alert(`Мое почтение, ${userData}`);
}
function greeting(name) {
    alert(`Привет, ${name}! Продолжим знакомство?`);
}

