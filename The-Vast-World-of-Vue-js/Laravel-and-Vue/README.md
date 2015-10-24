# Laravel and Vue
Published on June 3rd, 2015 • Intermediate

So how exactly do we make AJAX requests with Vue? In this video, we'll pull in the Resource Vue plugin to make this process as simple and familiar as possible. To demonstrate the workflow, from scratch, we'll build a general guestbook app.


https://laracasts.com/series/learning-vuejs/episodes/8

View the source for this episode on [GitHub](https://github.com/laracasts/Laravel-and-Vue).

### Installation de Laravel
```bash
composer create-project laravel/laravel --prefer-dist
```
### Switch connection vers sqlite
en changeant le defaut dans le fichier config/database.php
```
'default' => env('DB_CONNECTION', 'sqlite'),

# création du fichier de la bd sqlite
touch storage/database.sqlite
```

### création du model avec la migration
```bash
php artisan make:model Message -m
```

### Installation de sqlite
sudo apt-get install php5-sqlite
sudo apache2ctl restart
```
