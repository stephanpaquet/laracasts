<?php

Route::get('api/tasks', function () {
    return App\Task::latest()->get();
});

Route::get('/', function () {

    $tasks = App\Task::latest()->get();

    return view('welcome', compact('tasks'));
});
