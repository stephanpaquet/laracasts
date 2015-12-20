# 11. Vue Resource

Published on Nov. 25th 2015

If your only need for jQuery is to perform AJAX requests, then, instead, you should use Vue's [resource plugin](https://github.com/vuejs/vue-resource).

```javascript
// http://localhost:8000/api/tasks
var resource = this.$resource('api/tasks/:id');

resource.get({}, function  (tasks) {
    this.list = tasks;
    console.log(tasks);
}.bind(this));
```

```javascript
// http://localhost:8000/api/tasks/5
var resource = this.$resource('api/tasks/:id');

resource.get({'id': 5}, function  (tasks) {
    this.list = tasks;
    console.log(tasks);
}.bind(this));
```


```javascript
// Request URL:http://localhost:8000/api/tasks/5
// Request Method:PUT
var resource = this.$resource('api/tasks/:id');

resource.update({'id': 5}, {'body': 'Updated task body'}, function  (tasks) {
    this.list = tasks;
    console.log(tasks);
}.bind(this));
```
