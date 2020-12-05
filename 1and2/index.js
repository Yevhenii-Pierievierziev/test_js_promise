/* 
1. Промисифицировать setTimeout() : напишите функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
Должен быть возможен вот такой вызов delay(ms).then(doSomething)

Пример использования и эквивалетный вызов setTimeout():
delay(1000)
	  .then(() => alert("Hello!"))

setTimeout(()=> alert("Hello!"),1000)
*/

let delay = function (ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("result");
		}, ms);
	});
}

delay(1000).then(() => alert("Hello!"));

/* 
2. Напишите функцию, которая последовательно выводит в консоль числа от 1 до 20, с интервалом между числами 100мс. То есть, весь вывод должен занимать 2000мс, в течение которых каждые 100мс в консоли появляется очередное число. Решение задачи должно использовать setTimeout. (По циклу таймеры не создавать)
*/

function printNumbers(from, to) {
	let timer = setInterval(() => { from <= to ? console.log(from++) : clearInterval(timer); }, 1000);
}

function printNumbers(from, to) {
	setTimeout(function int() {
		console.log(from++);
		if (from <= to) setTimeout(int, 100);
	}, 100);
}

printNumbers(1, 20);
