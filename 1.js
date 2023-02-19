const temp = Number.parseFloat(prompt('Введите температуру'));
alert(`Цельсий: ${temp}, Фаренгейт: ${convF(temp)}`);

function convF(num) {
    return Math.round((9/5) * num + 32);    
}

