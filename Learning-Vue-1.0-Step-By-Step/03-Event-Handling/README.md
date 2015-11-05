#  Event Handling

Published on October 28th, 2015 ? beginner
Who about basic event handling? When a user clicks a button, or submits a form, or presses a key. How do we manage these common operations with Vue? Once again, it's a breeze!

Before 1.0
```
v-on="submit: handleIt"
```

Since 1.0
```
v-on:submit="handleIt"

// or

@submit="handleIt"
@submit.prevent="handleIt"
@click="doSomething"

```

## Deux manière de modifier le comportement normal d'une événement

### 1) e.preventDefault();
```javascript

methods: {
    handleIt: function (e) {
        'e' is the native DOM event
        e.preventDefault();
    }
}
```

### 2) Event modifier
```javascript
v-on:submit.prevent="handleIt" // prevent default
v-on:submit.stop="handleIt"    // stop propagation

```
