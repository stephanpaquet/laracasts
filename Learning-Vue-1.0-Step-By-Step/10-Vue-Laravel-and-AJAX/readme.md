# Published on Nov. 23rd 2015

It's easy to hardcode a set of data to demonstrate some piece of Vue functionality. But, what about when it's time to actually fetch that data from your server. How do we go about that? Well, I'll show you two options.

## Installation de Laravel
```bash
composer create-project laravel/laravel --prefer-dist 10-Vue-Laravel-and-AJAX
cd 10-Vue-Laravel-and-AJAX
php artisan serve
```
[http://localhost:8000/](http://localhost:8000/)

### Switch to sqlite
changer le Db Connection pour sqllite dans le ficher
config/database.php

```bash
touch storage/database.sqlite
```

### Creation du model et de la migration
```bash
php artisan make:model Task -m
```

### Migrate it
```bash
php artisan migrate
```

### Création du feeder
dans le fichier database/factories/ModelFactory.php

```bash
php artisan tinker
>>> factory('App\Task', 10)->create();
```

### Nouveau git clone
```bash
cp .env.example .env
php artisan key:generate
```
