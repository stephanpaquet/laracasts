# Published on Nov. 23rd 2015

It's easy to hardcode a set of data to demonstrate some piece of Vue functionality. But, what about when it's time to actually fetch that data from your server. How do we go about that? Well, I'll show you two options.

## Installation de Laravel
```bash
composer create-project laravel/laravel --prefer-dist 13-Vue-and-Laravel-Workflow
cd 13-Vue-and-Laravel-Workflow
php artisan serve
```
[http://localhost:8000/](http://localhost:8000/)

### Switch to sqlite
changer le Db Connection pour sqllite dans le ficher
config/database.php

```bash
touch storage/database.sqlite
npm install
```
