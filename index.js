const books = [
    {
    id: "1",
    title: `Apple. Эволюция компьютера`,
    author: `Владимир Невзоров`,
    img: `https://bukva.ua/img/products/449/449532_200.jpg`,
    plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
},
    {
    id: "2",
    title: `Как объяснить ребенку информатику`,
    author: `Кэрол Вордерман`,
    img: `https://bukva.ua/img/products/480/480030_200.jpg`,
    plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
    оставаясь в безопасности. 
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
    объясняются наглядно с помощью иллюстраций и схем.`,
    },
 {
    id: "3",
    title: `Путь скрам-мастера. #ScrumMasterWay`,
    author: `Зузана Шохова`,
    img: `https://bukva.ua/img/products/480/480090_200.jpg`,
    plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
    какими инструментами ему нужно пользоваться.`,
  },
   
];

const STORAGE_KEY = `books`;
localStorage.setItem(STORAGE_KEY, JSON.stringify(books));

const rootEl = document.querySelector(`#root`);

const firstDivEl = document.createElement(`div`);
firstDivEl.classList.add(`firstDiv`);

const secondDivEl = document.createElement(`div`);
secondDivEl.classList.add(`secondDiv`);

rootEl.append(firstDivEl, secondDivEl);







const headingEl = document.createElement(`h1`);
headingEl.textContent = `Library`;

const ulEl = document.createElement(`ul`);
const btnEl = document.createElement(`button`);
btnEl.textContent = `Add`;
btnEl.setAttribute(`type`, `button`);

firstDivEl.append(headingEl, ulEl, btnEl);






function renderList() {
    const books = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const bookTitle = books.map(({title, id}) => {
    return `<li id=${id}><p>${title}</p>
    <button>edit</button>
    <button>delete</button>
            </li>`
    }).join(``);
    ulEl.insertAdjacentHTML(`beforeend`, bookTitle);
    const titleEl = document.querySelectorAll(`p`);
    console.log(titleEl);

    titleEl.forEach(element => {
        element.addEventListener("click", renderPreview);
    });

    const btnEdite = document.querySelectorAll(`.edit`);
    const btnDelete = document.querySelectorAll(`.delete`);

    btnEdite.forEach((element) => {
        element.addEventListener(`click`, renderEdite);
    });

    btnDelete.forEach((element) => {
        element.addEventListener(`click`, renderDelete);
    });

}
renderList();
function renderEdite() {
    const bookId = event.target.parentNode.id;
    console.log(`edit`);
}
function renderDelete(event) {
    const deleteId = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(deleteId);
    const bookId = event.target.parentNode.id;
    console.log(`delete`);
}


function renderPreview(event) {
    const books = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const titleTC = event.target.textContent;
    console.log(titleTC);
    const titleObj = books.find((option) => option.title === titleTC);
    console.log(titleObj);
    secondDivEl.innerHTML = createPreviewMarkup(titleObj);

}


function createPreviewMarkup({ title, author, img, plot }) {
   
    const oneBook = `<div>
    <h2>${title}</h2>
    <p>${author}</p>
    <img src="${img}" alt="picture" />
    <p>${plot}</p>
    </div>`;

    return oneBook;
    
}







