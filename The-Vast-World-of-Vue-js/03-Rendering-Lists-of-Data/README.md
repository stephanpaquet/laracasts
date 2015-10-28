#  Rendering Lists of Data

Published on May 26th, 2015 • intermediate

Let's continue with another baby-step. You have an array of data, and simply need to filter through it and render each item/key on the page. It couldn't be simpler with Vue.js!

https://laracasts.com/series/learning-vuejs/episodes/3


```
data: {
    names: ['Stan', 'Jame', 'John', 'Taylor', 'Michelle', 'Susan']
}
```

```
<li v-repeat="names">{{ $values }}</li>

<li v-repeat="name in names">{{ name }}</li>

<li v-repeat="name: names">{{ name }}</li>

<li v-repeat="name: names" v-text="name"></li>

<span v-text="1 + 6"></span> <!-- 7 -->

<span>{{ 1 + 6 }}</span> <!-- 7 -->



```
