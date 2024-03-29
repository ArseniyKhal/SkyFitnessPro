# SkyFitnessPro

<img width="379" alt="image" src="https://github.com/ArseniyKhal/SkyFitnessPro/assets/92600602/0abf9775-c3c7-48e6-9203-ad4321dec0d7">

Командная разработка сайт для онлайн школы тренировок "SkyFitnessPro"

## Ссылка на приложение: https://skyfitnesspro3g.netlify.app

## Первоначальная задача:

Изучить и освоить процессы и метода командной работы над одним проектом.
Разработать сайт для онлайн школы тренировок "SkyFitnessPro"

## Установка

Склонируйте репозиторий и установите зависимости

```sh
npm install
```

Создайте файл .env (пример переменной окружения находится в файле .env.example)

### .env

В .env в переменной **REACT_APP_API_KEY** хранится апи-ключ приложения. Для запуска проекта локально или изменения проекта вы можете создать свой проект и базу данных [Firebase](https://firebase.google.com/). Вам понадобится база данных **Realtime database**. Описание структуры данных смотрите в разделе ("Backend и защита данных"), фикстуры курсов находятся в /src/data/fixtures/course.json.

Данные курсов содержатся ([здесь](https://docs.google.com/document/d/1i982bVLvoD-tI8Uv1hK0D6mS3_-wPspaK8E3fcHVhgI/edit)).

Для запуска в development режиме выполните команду

```sh
npm run start
```

Приложение будет доступно по адресу: [http://localhost:3000](http://localhost:3000)

При необходимости production сборки выполните команду

```sh
npm run build
```

## Описание проекта:

Сайт для онлайн школы тренировок "SkyFitnessPro".
Макет доступен [здесь](https://www.figma.com/file/QoOmLM2WGbES23xQeDCCYi/%D0%A1%D0%B0%D0%B9%D1%82-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BE%D0%BA?node-id=0%3A1)

## Структура и функционал приложения

### Главная страница приложения

- [x] логотип, краткое описание
- [x] список карточек с названиями всех курсов, имеющихся в базе данных
- [x] кнопка "Войти", при клике на которую пользователь попадает на страницу авторизации

<img width="379" alt="image" src="https://github.com/ArseniyKhal/SkyFitnessPro/assets/92600602/0abf9775-c3c7-48e6-9203-ad4321dec0d7">

### Страница курса

- [x] содержит логотип приложения и кнопка входа
- [x] подробное описание курса, имеющееся в базе данных
- [x] кнопка для записи на просматриваемый курс тренировки

<img width="379" alt="image" src="https://github.com/ArseniyKhal/SkyFitnessPro/assets/92600602/028c645e-b7e1-429e-af93-a3a5b61ac599">

### Страница авторизации

- [x] на данной странице пользователь имеет возможность зарегистрироваться или войти в свой аккаунт

<img width="379" alt="image" src="https://github.com/ArseniyKhal/SkyFitnessPro/assets/92600602/249e96e8-36e8-4b28-a118-eeadea7cb4e9">

### Страница профиля

- [x] логотип приложения
- [x] информация о пользователе
- [x] кнопки для смены логина и пароля
- [x] в правом верхнем углу отображается имя и логотип пользователя, при клике на которое появляется дополнительное меню
- [x] отображается список курсов, на которые записан пользователь

<img width="379" alt="image" src="https://github.com/ArseniyKhal/SkyFitnessPro/assets/92600602/e700d019-7239-466c-b165-15bf5df8b6b2">

### Страница тренировки

- [x] логотип приложения, краткое описание
- [x] в правом верхнем углу отображается имя и логотип пользователя, при клике на которое появляется дополнительное меню
- [x] видео тренировки
- [x] список упражнений (из базы данных)
- [x] таблица с прогрессом пользователя
- [x] кнопка для возможности заполнения прогресса по тренировке

<img width="379" alt="image" src="https://github.com/ArseniyKhal/SkyFitnessPro/assets/92600602/5d2f5178-f2e9-4503-9fe9-ad8728b4cc8d">

### Работа приложения

- [x] приложение реализовано как SPA
- [x] главная страница:
  - [x] при клике на кнопку "Войти" пользователь попадает на страницу авторизации, если он еще не авторизован
  - [x] если пользователь авторизован, вместо кнопку "Войти" отображается аватар и логин пользователя
  - [x] список карточек выводится в соответствии с названиями всех курсов, имеющихся в базе данных
  - [x] если карточек много и они не помещаются в высоту экрана, снизу списка карточек отображается кнопка "Наверх" для плавной перемотки в начало списка доступных курсов
  - [x] пока данные прогружаются, пользователь видит лоадер загрузки
  - [x] при ошибке запроса на странице выводится соответствующая надпись
  - [x] по клику на выбранный курс пользователь попадает на страницу, где может ознакомиться с его описанием
- [x] страницы авторизации и регистрации:
  - [x] настроена валидация полей логина и пароля
  - [x] при возникновении ошибки выводится соответствующее сообщение
- [x] страница профиля пользователя:
  - [x] при клике на кнопки "Редактировать логин", "Редактировать пароль" появляется модальное окно с возможностью редактировать и сохранять введенные данные. Поскольку требования политики безопасности Firebase требуют, чтобы была свежая регистрация пользователя, то пользователю, возможно, придется авторизоваться снова, чтобы сменить e-mail или пароль
  - [x] в правом верхнем углу отображается имя пользователя, при клике на которое появляется меню с возможностью остаться на странице профиля, а также выйти из приложения
  - [x] при клике на карточку курса появляется модальное окно с возможностью выбора тренировки, выполненные тренировки отмечены цветом и галочкой
  - [x] при клике на тренировку пользователь попадает на страницу соответствующей тренировки
- [x] страница тренировки:
  - [x] в правом верхнем углу отображается имя пользователя, при клике на которое появляется меню с возможностью перейти на страницу профиля, а также выйти из приложения
  - [x] возможность просматривать видео тренировки (play, stop, pause, регулировка громкости)
  - [x] при клике на кнопку "Заполнить свой прогресс" появляется модальное окно с возможностью ввести данные (настроена валидация) и сохранить их, при этом уже имеющиеся до этого данные о количестве выполненных повторений отображаются сразу при открытии окна
  - [x] после сохранения данных появляется модальное окно с надписью "Ваш прогресс засчитан", исчезающее через 1.5 секунды.
  - [x] в таблице прогресса отображаются упражнения (список берется из базы данных), а также выводится прогресс в процентах (автоматически рассчитывается после ввода данных пользователем)
- [x] при попытке неавторизованного пользователя зайти на страницу тренировки появляется модальное окно с надписью "Пожалуйста авторизуйтесь"
- [x] при переходе на новую страницу реализована прокрутка страницы в начало
- [x] реализована адаптивная верстка

### Технический стек приложения

- [x] React
- [x] Redux + Redux Toolkit + RTK Query
- [x] Firebase
- [x] React Router DOM, реализация routing
- [x] Styled Components
