/* 
3. Доделать "fetch users practice" . Асинхронно подгружать информацию о пользователях из users.json и рендерить карточки пользователей. Файл users.json не менять. Профессию каждого пользователя сделать рандомной по вашему массиву. Вёрстка должна быть сделана адаптивно. Все карточки размещать в ряд, как на card_pattern.png. Карточку, на которую кликнули выделять соответствующими стилями(как на шаблоне). 
*/

let users;
let persons = [];
let professions = [
	'Developer',
	'CEO',
	'CTO',
	'ProjectManager',
	'Sales'
];
let output = document.getElementById('output');


let data = fetch("./user.json").then(responce => responce.json())
	.then((res) => {
		persons = res;
		output.innerHTML = persons.map(person => {

			let professionIndex = Math.floor(Math.random() * Math.floor(professions.length));
			return `<div data-id="${person.id}">
        <div class="column">
        <div class="card">
        <div class="content">
        <img src="${person.profilePicture}" alt="no avatar">
        <div class="names">
          <span class="names-text">${person.firstName} ${person.lastName}</span> 
          </div>
          <div>
          <span>${professions[professionIndex]}</span>
          </div>
          <div>
          <button class="connect-btn">Connect</button>
          </div>
          </div>
        </div>
        </div>`;
		}).join('');
	});


