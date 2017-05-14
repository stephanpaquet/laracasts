# Let's Build A Forum with Laravel and TDD

```
composer create-project --prefer-dist laravel/laravel forum
cd forum
php artisan serve
```

1. Thread
2. Reply to a thread
3. User

A. Thread is created by a user
B. A reply is blongs to a thread, and belongs to a user.


```php
php artisan make:model Thread -mr
php artisan make:model Reply -mc


php artisan tinker

$threads->each(function ($thread) {
		factory('App\Reply', 10)->create(['thread_id' => $thread->id]);
	}
);
```
