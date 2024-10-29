## Начало разработки
После создания проекта и установки зависимостей с помощью `npm install` (или `pnpm install` или `yarn`) соберите `.env` файл по шаблону `.env.example`

Ссылка на API: https://jsonplaceholder.typicode.com

## Разработка

Как только конфиг для приложения будет готово, запустите сервер разработки:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Сборка

Чтобы создать production версию приложения:

```bash
npm run build
```

Вы можете предварительно просмотреть production сборку с помощью
`npm run preview`.