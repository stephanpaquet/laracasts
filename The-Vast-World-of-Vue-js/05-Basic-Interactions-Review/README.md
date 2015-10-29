#  Basic Interactions Review  
Published on May 27th, 2015 • Intermediate

Before we move on to other key areas of Vue.js, let's toy around for a bit to ensure that you have a good understanding of basic interactions.

dans la console du browser, on peux alterner l'affichage du post


```
postVue.isVisible = true;
postVue.isVisible = false;
```

```javascript
$('button').on('click', function () {
    $('#post').hide();
});

<button class="glyphicon glyphicon-remove-sign pull-right" v-on="click: isVisible = false"></button>


```
