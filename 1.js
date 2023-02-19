const celcius = Number.parseFloat(prompt('Введите температуру по Цельсию'));
alert(`Цельсий: ${celcius}, Фаренгейт: ${Math.round(convCelToFaren(celcius))}`);

function convCelToFaren(num) {
    return ((9/5) * num + 32);    
}

