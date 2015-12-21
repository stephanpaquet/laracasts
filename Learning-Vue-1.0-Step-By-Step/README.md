# 13. Vue and Laravel Workflow

Published on Dec. 1st 2015

Let's begin learning what your workflow might look like, once you mix Vue with Laravel.

## Installation de Laravel
```bash
composer create-project laravel/laravel --prefer-dist 13-Vue-and-Laravel-Workflow
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
