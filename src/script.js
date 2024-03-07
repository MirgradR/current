// Импорт HTML-компонентов как строк из отдельных файлов
import header from "./components/header/header.html";
import mainContent from "./components/main/main.html";
import section from "./components/section/section.html";
import welcome from "./components/welcome/welcome.html";
import about from "./components/about/about.html";
import contacts from "./components/contacts/contacts.html";
import partners from "./components/partners/partners.html";


import "./components/header/header.css";
import "./components/welcome/welcome.css";
import "./components/about/about.css";
import "./components/contacts/contacts.css";
import "./components/partners/partners.css";

// Слушатель события, который выполнится, когда весь DOM загрузится
document.addEventListener("DOMContentLoaded", async function () {
  // Вставка заголовка в элемент с ID 'app'
  await insertHTMLIntoElementById("app", header);

  // Вставка основного содержимого в элемент с ID 'app'
  await insertHTMLIntoElementById("app", mainContent);

  // После вставки 'header' и 'mainContent', элемент 'main' должен быть в DOM.
  // Вставка секции в элемент с ID 'main'
  await insertHTMLIntoElementById("main", section);
  await insertHTMLIntoElementById("main", welcome);
  await insertHTMLIntoElementById("main", partners);
  await insertHTMLIntoElementById("main", about);
  await insertHTMLIntoElementById("main", contacts);
});

// Функция для вставки HTML-контента в элемент с заданным ID
async function insertHTMLIntoElementById(elementId, htmlContent) {
  // Попытка получить целевой элемент по ID
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    // Если элемент найден, вставляем HTML-контент
    targetElement.insertAdjacentHTML("beforeend", htmlContent);
  } else {
    // Если элемент не найден, выводим предупреждение в консоль
    console.warn(`No element with ID ${elementId} was found in the DOM.`);
  }
}
