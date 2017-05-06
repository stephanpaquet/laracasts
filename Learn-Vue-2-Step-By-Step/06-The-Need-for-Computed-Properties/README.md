# Learn Vue 2: Step By Step: The Need for Computed Properties

Often, you'll find that a piece of data needs a bit of calculation, before it's rendered onto the page. In such instances, Vue's computed properties are exactly what you require.


Utiliser computed:
- lorsqu'une partie du data a besoin d'être calculé avant d'être affiché
- Pour filtrer un tableau des datas

```

{{ message.split('') }} // [ "H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d" ]
{{ message.split('').reverse() }} // [ "d", "l", "r", "o", "W", " ", "o", "l", "l", "e", "H" ]
{{ message.split('').reverse().split('') }} // dlroW olleH





```
