# Vue Show  
Published on October 28th, 2015

You'll often find yourself needing to toggle the display of an element, based upon some set of criteria. For example, maybe a submit button shouldn't display unless you've first typed in a message. How might we accomplish that with Vue?


- **v-show**: toggle display of the element
- **v-if**: create / remove the element

```html
// Ajoute le propriété disable si la condition est true
v-bind:disabled="! message"
```
