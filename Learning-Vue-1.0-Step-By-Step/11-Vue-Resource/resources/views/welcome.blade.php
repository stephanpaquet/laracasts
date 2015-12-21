<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <style media="screen">
            body {
                margin: 5em 0;
            }
        </style>
    </head>
    <body>
        <div class="container">


            <tasks></tasks>

            {{-- With Blade
            <h1>My tasks</h1>
            <ul class="list-group">
                @foreach ($tasks as $task)
                    <li class="list-group-item">
                        {{ $task->body}}
                    </li>
                @endforeach
            </ul>
            --}}

        </div>

        <template id="tasks-template">
            <h1>My tasks</h1>

            <ul class="list-group">
                <li class="list-group-item clearfix" v-for="task in list">
                    @{{ task.body}}

                    <button class="btn btn-default pull-right" @click="deleteTask(task)"> X </button>
                </li>
            </ul>
        </template>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.11/vue.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/0.1.17/vue-resource.js"></script>
        <script src="/js/main.js" type="text/javascript"></script>
    </body>
</html>
