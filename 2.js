const yourName = prompt('Введите имя');
greeting(yourName);

function greeting(name) {
    console.log(`Привет, ${name}!`)
}


// const userData = prompt("Введите имя");
// const age = parseInt(prompt(greeting(userData)));

// ageCompare(age, userData);


// function greeting(name) {
//     alert(`Привет, ${name}! Сколько Вам лет?`)
// }

// function ageCompare(num, name) {
//     if (0 < num < 50) {
//         alert(`${name}, Вы так молоды!`);
//     } else {
//         alert(`Мое почтение, ${name}`);
//     }
// }