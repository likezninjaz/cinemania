# JADE SASS STARTER

Шаблон для быстрого старта верстки на Jade и SASS.

## Как начать?

Установить:

- [nodejs и npm](https://nodejs.org/)
- [gulp](http://gulpjs.com/)
- [yarn](https://yarnpkg.com/)

Далее выполняем:

```
yarn
gulp build
```

Установятся все зависимости проетка

## Возможности

- [BrowserSync](http://www.browsersync.io/)
- компиляция jade и sass
- сжатие стилей, скриптов ([ES2015](https://github.com/lukehoban/es6features)) и изображений
- проверка javascript-кода на наличие ошибок ([eslint](http://eslint.org/))

### Jade

По умолчанию имеется один index.jade, в котором импортируются includes/head.jade, includes/header.jade и includes/footer.jade. Их стоит использовать в других подобных создаваемых шаблонах.

### SASS

Все стили находятся в папке src/sass. Gulp собирает их в один файл main.min.css и кладет в папку dist/css.

Все делится на логические блоки (файлы). Если вы хотите добавить еще один, создайте новый sass-файл и подключите его в main.sass.

Можно активировать плагин [gulp-uncss](https://www.npmjs.com/package/gulp-uncss), чтобы убрать ненужные стили (см. файл gulpfile.js: задача `sass-build`).

#### Пост-процессоры

В шаблоне для изменения скомпилированного css-кода используются [плагины](http://postcss.parts/) [Postcss](https://github.com/postcss/postcss).

- [autoprefixer](https://github.com/postcss/autoprefixer) (автоматически проставляет браузерные префиксы)
- [cssnano](https://github.com/ben-eb/cssnano) (сжимает css-код)

### Изображения

За сжатие изображений отвечает задача `gulp images` (в том числе `gulp webp`). Можно вызывать ее самостоятельно, либо запустить `gulp`, и после этого каждый файл изображения, размещенный в src/img (включая svg), будет сжат и положен в dist/img с тем же именем. Также используется генерация [WebP-изображений](https://developers.google.com/speed/webp/). Их можно использовать так:

**html:**

```
<picture>
	<source srcset="dist/img/image.webp" type="image/webp">
	<img src="dist/img/image.jpg">
</picture>
```

**css (вместе с [modernizr](https://modernizr.com/)):**

```
body
    background-position: center center
    background-attachment: fixed

.no-webp body
    background-image: url(#{$img}/bg-main.jpg)

.webp body
    background-image: url(#{$img}/bg-main.webp)
```

Вы можете использовать [систему символов SVG](https://css-tricks.com/svg-symbol-good-choice-icons/). Эти символы описываются единожды в самом начале документа (для этого заводится один скрытый тег svg), а затем их можно использовать повторно где-либо на страницах, менять их заливку, размер, применять трансформации (поворот и др.), а также анимировать какие-либо значения (fill и др.) с помощью [transition](http://www.w3schools.com/css/css3_transitions.asp) или применять сложную анимацию на основе [keyframes](http://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp).

Пример:

```
...
</head>
<body>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
        <symbol id="icon-test" viewBox="0 0 100 100">
            <path d="..."></path>
        </symbol>
    </svg>

	...

	<svg class="icon-test">
		<use xlink:href="#icon-test"></use>
	</svg>
	...
```

#### Favicons

Для генерации favicons вы можете пользоваться сервисом [RealFaviconGenerator](http://realfavicongenerator.net/). Положите сгенерированные иконки в папку `/src/favicons`.

### Скрипты

Для сборки ваших и сторонних модулей используется [Browserify](http://browserify.org/).

Все необходимые пакеты устанавливаются через [yarn](https://yarnpkg.com/) (`yarn add package`) и после этого их можно использовать у себя в коде. Например:

`import _find from 'lodash/find';`

Входная точка приложения - src/js/app.js.

### Финальная сборка

После того, как вы закончили работу над очередной частью вашего проекта, выполните задачу `gulp build`, чтобы привести выходные файлы с правильное состояние. Так, например, вы добьетесь того, что js будет сжат и из него сборщик удалит карты кода.
