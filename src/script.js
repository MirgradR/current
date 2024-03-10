// Импорт HTML-компонентов как строк из отдельных файлов
import head from "../index.html";
import header from "./components/header/header.html";
import mainContent from "./components/main/main.html";
import banner from "./components/banner/banner.html";
import presentation from "./components/presentation/presentation.html";
import partners from "./components/partners/partners.html";
import integrates from "./components/integrates/integrates.html";
import offer from "./components/offer/offer.html";

import "../styles.css";
import "./components/header/header.css";
import "./components/banner/banner.css";
import "./components/presentation/presentation.css";
import "./components/partners/partners.css";
import "./components/integrates/integrates.css";
import "./components/offer/offer.css";

// Слушатель события, который выполнится, когда весь DOM загрузится
document.addEventListener("DOMContentLoaded", async function () {
  // Вставка заголовка в элемент с ID 'app'
  await insertHTMLIntoElementById("app", header);

  // Вставка основного содержимого в элемент с ID 'app'
  await insertHTMLIntoElementById("app", mainContent);

  // После вставки 'header' и 'mainContent', элемент 'main' должен быть в DOM.
  // Вставка секции в элемент с ID 'main'
  await insertHTMLIntoElementById("main", banner);
  await insertHTMLIntoElementById("main", partners);
  await insertHTMLIntoElementById("main", presentation);
  await insertHTMLIntoElementById("main", integrates);
  await insertHTMLIntoElementById("main", offer);
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
