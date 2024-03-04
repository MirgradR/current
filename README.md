Инструкция по использованию системы компонентов

УСТАНОВКА Node.js

Перед началом работы вам нужно установить Node.js, который включает в себя npm (Node Package Manager), необходимый для установки пакетов и запуска проекта.

1. Скачайте и установите Node.js с официального сайта: https://nodejs.org/.
2. После установки откройте терминал или командную строку и проверьте версии Node.js и npm, введя следующие команды:

node -v
npm -v

Это должно вывести номера версий, подтверждая, что установка прошла успешно.

О ПРОЕКТЕ

Этот проект использует систему компонентов, где каждый компонент представляет собой отдельный HTML-файл. Компоненты динамически загружаются и вставляются в основной HTML-файл с использованием JavaScript.

СТРУКТУРА КАТАЛОГОВ

src/components: Каждый компонент находится в своей подпапке внутри этой директории.
src: Здесь содержится основной JavaScript-файл (script.js), который управляет вставкой компонентов.
styles.css: Общий CSS-файл для всего проекта.
index.html: Основной HTML-файл, который служит точкой входа в приложение.

КАК СОЗДАТЬ НОВЫЙ КОМПОНЕНТ

1. Создайте новую папку в src/components с названием вашего компонента.
2. Внутри этой папки создайте HTML-файл для вашего компонента, например myComponent.html.
3. Если компоненту требуются уникальные стили, создайте соответствующий CSS-файл в той же папке.

КАК ДОБАВИТЬ КОМПОНЕНТ НА СТРАНИЦУ

1. Импортируйте HTML-компонент в script.js с помощью import:

import myComponent from "./components/myComponent/myComponent.html";

2. Добавьте компонент в DOM с помощью функции insertHTMLIntoElementById, указав ID элемента, куда вы хотите вставить компонент, и импортированный HTML-контент:

await insertHTMLIntoElementById("app", myComponent);

3. Убедитесь, что у элемента в index.html, в который вы хотите вставить компонент, есть соответствующий ID.

-
-
-
-

Пример: Добавление компонента header
Предположим, у вас уже есть компонент header в папке src/components/header/header.html.

1. Откройте script.js и импортируйте header.html:

import header from "./components/header/header.html";

2. Вставьте header в элемент с ID app:

await insertHTMLIntoElementById("app", header);

3. Убедитесь, что в index.html есть элемент с ID app:

<div id="app"></div>

ЗАПУСК ПРОЕКТА

1. Для запуска проекта установите все зависимости с помощью npm install и запустите проект через npm run dev или сборщик, который вы используете.
2. Для билда проекта используйте npm run build
3. Для запуска сбилженного проекта нужно установить зависимость командой npm install -g serve и запустить командой npm run dev
