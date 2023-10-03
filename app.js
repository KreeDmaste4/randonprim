function rand(min,max) { 
   return Math.floor( Math.random() * ( max + 1 - min) - min) 
}

let amout = +prompt('Введите колчиество примеров');

for (let i = 1; i <= amout;i++) {
    let one = rand(1,10)
    let two = rand(1,10)
    let symbols = rand(1,4)
    let symbol;
    let answer = 0;
    if (symbols == 1) {
        symbol = '+';
        answer = one + symbol + two;
    }else if (symbols == 2) {
        symbol = '-';
        answer = one + symbol + two;
    }else if(symbols == 3){
        symbol = '*';
        answer = one + symbol + two ;
    }else if(symbols == 4) {
        symbol = '/';
        answer = one + symbol + two;
    }
    let result = prompt(one + symbol + two)
    console.log(answer == result ? `Ваш ответ верный ${result}` : `Ваш ответ не верный ${result} , верный ответ ${answer}`);
}